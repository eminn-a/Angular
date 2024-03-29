import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getThemes() {
    const { apiUrl } = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getTheme(id: string) {
    //TODO: Implement later for single theme to get!
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  createTheme(themaName: string, postText: string) {
    const { apiUrl } = environment;
    const payload = { themaName, postText };
    return this.http.post<Theme>(`${apiUrl}/themes`, payload);
  }

  getPosts(limit?: number) {
    const { apiUrl } = environment;
    let url = `${apiUrl}/posts`;

    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Post[]>(url);
  }
}
