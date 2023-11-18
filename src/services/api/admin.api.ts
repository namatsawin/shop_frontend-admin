import { BaseAPI } from "./BaseAPI";
import { LoginPresenter } from "@/presenters/login.presenter";

export class AdminAPI extends BaseAPI {
  protected url = 'admin';

  public async authenticate(payload: LoginPresenter) {
    const response = await this.http.post('/auth', new LoginPresenter(payload.email, payload.password))
    return response.data
  }
}
