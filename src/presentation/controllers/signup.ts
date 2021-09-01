export class SignUpController {
  public handle (httpRequest: any) {
    if (!httpRequest.body?.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }

    if (!httpRequest.body?.email) {
      console.log('dentro', httpRequest.body?.email)

      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }

    return {
      statusCode: 200,
      body: { message: 'dados do usuário' }
    }
  }
}
