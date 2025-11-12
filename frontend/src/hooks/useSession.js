import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { sessionApi } from '../api/sessions';

export const useCreateSession = () => {
  return useMutation({
    mutationKey: ['createSession'],
    mutationFn: sessionApi.createSession,
    onSuccess: () => toast.success('Session created successfully!!'),
    onError: (error) =>
      toast.error(error.response?.data?.message || 'Failed to create room..'),
  });
};

export const useActiveSession = () => {
  return useQuery({
    queryKey: ['activeSessions'],
    queryFn: sessionApi.getActiveSession,
  });
};

export const useMyRecentSessions = () => {
  return useQuery({
    queryKey: ['myRecentSessions'],
    queryFn: sessionApi.getMyRecentSessions,
  });
};

export const useSessionId = (id) => {
  return useQuery({
    queryKey: ['mySessionsId', id],
    queryFn: () => sessionApi.getSessionById(id),
    enabled: !!id,
    refetchInterval: 5000,
  });
};

export const useJoinSession = (id) => {
  return useMutation({
    mutationKey: ['joinSession'],
    mutationFn: () => sessionApi.joinSession(id),
    onSuccess: () => toast.success('Joined Session successfully'),
    onError: (error) =>
      toast.error(error.response?.data?.message || 'Failed to join the session'),
  });
};

export const useEndSession = (id) => {
  return useMutation({
    mutationKey: ['endSession'],
    mutationFn: () => sessionApi.endSession(id),
    onSuccess: () => toast.success('Ended session successfully'),
    onError: (error) =>
      toast.error(error.response?.data?.message || 'Failed to end the session'),
  });
};
