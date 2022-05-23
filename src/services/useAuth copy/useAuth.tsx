import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import i18n, { Languages } from '../../i18n';
import api from '../api';
import { NewUser, User } from '../api/types';
import { getErrorMessage } from '../Utilities/getErrorMessage';

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<FirebaseAuthTypes.User | null>(
    null,
  );
  const [localState, setLocalState] = useState<User | NewUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return subscriber; // unsubscribe
  }, []);

  useEffect(() => {
    try {
      async function fetchMyAPI() {
        if (localState && currentUser) {
          await api.users.create(currentUser.uid, {
            name: localState.name!,
            email: localState.email!,
            language: localState.language,
            avatar: '',
          });
        }
      }
      fetchMyAPI();
    } catch (error) {
      throw getErrorMessage(error.message);
    }
  }, [localState, currentUser]);

  const register = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(email, password);
      setLocalState({
        name,
        email,
        language: i18n.language as Languages,
        avatar: '',
      });
    } catch (error) {
      throw getErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw getErrorMessage(error.message);
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      throw getErrorMessage(error.message);
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      await auth().sendPasswordResetEmail(email);
    } catch (error) {
      throw getErrorMessage(error.message);
    }
  };

  return { login, logout, register, currentUser, forgotPassword, loading };
};

export default useAuth;
