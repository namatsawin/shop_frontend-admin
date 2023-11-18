import { AdminAPI } from './admin.api'

export class APIService {
  public readonly admin = new AdminAPI()

  // static
  private static _instance: APIService

  public static getInstance() {
    if (!this._instance) {
      this._instance = new APIService()
    }
    return this._instance
  }
}

export default APIService.getInstance()