import { IRequestLogin } from "@/commons/types/api/admin-api";
import { BaseAPI } from "./BaseAPI";

export class AdminAPI extends BaseAPI {
  protected url = 'admin';

  public async authenticate(payload: IRequestLogin) {
    // const response = await this.http.post('/auth', new LoginPresenter(payload.email, payload.password))
    // return response.data
    return { token: 'token' }
  }
}
