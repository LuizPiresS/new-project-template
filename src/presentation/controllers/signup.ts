import { EmailValidator } from './../protocols/email-validator'
import { Controller } from './../protocols/controller'
import { badRequest } from './../helpers/http-helper'
import { MissingParamError } from '../errors/missing-param-error'
import { HttpRequest, HttpResponse } from './../protocols/http'
import { InvalidParamError } from '../errors/invalid-param-error '
export class SignUpController implements Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor (private emailValidator: EmailValidator) {}

  public handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body?.name) {
      return badRequest(new MissingParamError('name'))
    }

    if (!httpRequest.body?.email) {
      return badRequest(new MissingParamError('email'))
    }

    if (!httpRequest.body?.password) {
      return badRequest(new MissingParamError('password'))
    }

    if (!httpRequest.body?.passwordConfirmation) {
      return badRequest(new MissingParamError('passwordConfirmation'))
    }

    const isValid = this.emailValidator.isValid(httpRequest.body.email)
    if (!isValid) {
      return badRequest(new InvalidParamError('email'))
    }
    return {
      statusCode: 200,
      body: { message: 'dados do usuário' }
    }
  }
}
