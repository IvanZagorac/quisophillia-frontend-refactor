import { jwtDecode}  from 'jwt-decode';
type DecodedToken = {
    userId?: string;
    email?: string;
    exp?: number;
    [key: string]: any;
  };

export const saveToken = (token: string, type: 'refresh' | 'token') =>
{
    try
    {
        const key = type === 'refresh' ? 'refreshAuthToken' : 'authToken';
        localStorage.setItem(key, token);
    }
    catch (error)
    {
        console.error('Error saving token:', error);
    }
};

export const getToken = (type: 'refresh' | 'token') =>
{
    try
    {
        const key = type === 'refresh' ? 'refreshAuthToken' : 'authToken';
        return localStorage.getItem(key);
    }
    catch (error)
    {
        console.error('Error getting token:', error);
        return null;
    }
};

export const getDecodedRefreshToken = (type: 'refresh' | 'token'): DecodedToken | null =>
{
    try
    {
        const token = getToken(type)

        if (!token)
        {
            console.warn('No token found');
            return null;
        }

        const decoded: DecodedToken = jwtDecode(token);
        return decoded;
    }
    catch (error)
    {
        console.error('Failed to decode refresh token:', error);
        return null;
    }
};

export const removeToken = (type: 'refresh' | 'token') =>
{
    try
    {
        const key = type === 'refresh' ? 'refreshAuthToken' : 'authToken';
        localStorage.removeItem(key);
    }
    catch (error)
    {
        console.error('Error removing token:', error);
    }
};

