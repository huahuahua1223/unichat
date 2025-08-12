// 以下是模拟的用户信息，供开发使用

export const mockUser = {
  id: '1',
  name: '测试用户',
  email: 'test@example.com',
  image: '/placeholder-user.jpg'
};

// 模拟的auth函数，始终返回已认证的用户
export function auth() {
  return Promise.resolve({ user: mockUser });
}

// 模拟的signOut函数
export function signOut() {
  return Promise.resolve();
}
