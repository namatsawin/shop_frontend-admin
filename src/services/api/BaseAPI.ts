import axios, { AxiosInstance } from "axios";
import urlJoin from 'url-join';

export abstract class BaseAPI {
  private _http!: AxiosInstance

  protected readonly abstract url: string 

  protected get http() {
    if (!this._http) {
      this._http = axios.create({
        baseURL: urlJoin(import.meta.env.BASE_URL, this.url),
      })

      this._http.interceptors.request.use(config => {
        const token = localStorage.getItem('accessToken')
        if (!token) return config

        config.headers.Authorization = `Bearer ${token}`
        return config
      })
    }
    return this._http
  }
}