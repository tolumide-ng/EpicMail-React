// export default jest.fn((config = mockConfig) =>
//   Promise.resolve({ data: config.data })
// );

export default jest.fn(() => Promise.resolve({ data: {} }));
