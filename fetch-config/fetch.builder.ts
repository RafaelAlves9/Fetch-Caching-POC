export class FetchBuilder {
   private baseUrl = "";
   private headers: Record<string, string> = {};
   
   static build() {
      return new FetchBuilder();
   }

   withUrl(url: string) {
      this.baseUrl = url;
      return this;
   }

   withHeaders(headers: Record<string, string>) {
      this.headers = headers;
      return this;
   }

   initInstance() {
      return async (path: string, init: RequestInit = {}) => {
         const url = `${this.baseUrl}${path}`;
         return fetch(url, init);
      };
   }
}
