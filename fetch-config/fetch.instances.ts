import { FetchBuilder } from "./fetch.builder";
import { fetchWithInterceptor } from "./fetch.intercept";

export interface IFetchInstances {
   public: (url: string, init?: RequestInit) => Promise<Response>;
}

export const instances = {
   public: FetchBuilder.build()
      .withHeaders({ "Content-Type": "application/json" })
      .initInstance(),
};

export const fetchInstances: IFetchInstances = {
   public: (url: string, init?: RequestInit) =>
      fetchWithInterceptor(instances.public, url, init)
};
