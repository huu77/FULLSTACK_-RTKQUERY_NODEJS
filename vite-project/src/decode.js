import jwtDecode from 'jwt-decode';

export const decodeToken = (token) => {
  if (!token) {
    throw new Error('Token is missing!');
  }

  try {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  } catch (error) {
    throw new Error('Invalid token!');
  }
};

 
