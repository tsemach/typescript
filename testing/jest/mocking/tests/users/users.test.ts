// users.test.js
import axios, { AxiosStatic } from 'axios';
import Users from '../../src/users/users';
import 'jest'

jest.mock('axios');
const mockFn = jest.fn().mockImplementation(axios.get);

test('should fetch users', async () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};

  mockFn.mockResolvedValue(resp);
  //axios.get.mockResolvedValue(resp);


  //console.log("TTTTTTTTTTTTT USERS:", result)
  return Users.all().then(data => expect(data).toEqual(users));


  //const result = await Users.all();
  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  //expect(mockFn).toHaveBeenCalled();
});