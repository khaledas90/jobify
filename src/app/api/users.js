import fs from 'fs';
import path from 'path';

const usersFilePath = path.resolve('/users.json');


export const  loadUsers = () =>{
try {
  const data = fs.readFileSync(usersFilePath, 'utf8');
  return JSON.parse(data);
  
} catch (error) {
  console.error('Error reading users.json:', err);
        return [];
}
} 

