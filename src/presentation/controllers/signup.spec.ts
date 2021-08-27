import { SignUpController } from './signup'
describe('SignUp controller', () => {
  test('Should return 400 if no name provided', async () => {
    // sut sempre será a classe a ser testada
    const sut = new SignUpController()
    const httpRequest = {
      name: 'any_name',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
