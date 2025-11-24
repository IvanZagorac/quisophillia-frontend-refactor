import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode}  from 'jwt-decode';
type DecodedToken = {
    userId?: string;
    email?: string;
    exp?: number;
    [key: string]: any;
  };

export const saveToken = async (token: string, type: 'refresh' | 'token') => 
{
    try 
    {
        if (type === 'refresh')
        {
            await AsyncStorage.setItem('refreshAuthToken', token);
        }
        else
        {
            await AsyncStorage.setItem('authToken', token);
        }
        
    }
    catch (error) 
    {
        console.error('Error saving token:', error);
    }
};
      
export const getToken = async (type: 'refresh' | 'token') => 
{
    try 
    {
        if (type === 'refresh')
        {
            return await AsyncStorage.getItem('refreshAuthToken');
        }
        else
        {
            return await AsyncStorage.getItem('authToken');
        }
    }
    catch (error) 
    {
        console.error('Error getting token:', error);
    }
};

export const getDecodedRefreshToken = async (type: 'refresh' | 'token'): Promise<DecodedToken | null> => 
{
    try 
    {
        const token = await getToken(type)

  
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
      
export const removeToken = async (type: 'refresh' | 'token') => 
{
    try 
    {
        if (type === 'refresh')
        {
            return await AsyncStorage.removeItem('refreshAuthToken');
        }
        else
        {
            return await AsyncStorage.removeItem('authToken');
        }
        
    }
    catch (error) 
    {
        console.error('Error removing token:', error);
    }
};
