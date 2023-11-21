import { BaseAPI } from "./BaseAPI";

export class UserAPI extends BaseAPI {
  protected url = 'admin/user';

  public async getUser() {
    return { user: {} }
  }
}
