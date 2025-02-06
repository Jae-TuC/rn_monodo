import { globalFormatter } from "@/utils/constant";
import { queryClient } from "@/utils/queryClient";
import { syncedQuery } from "@legendapp/state/sync-plugins/tanstack-query";
import dayjs from "dayjs";

export const weatherQuery = syncedQuery({
  queryClient: queryClient,
  query: {
    queryKey: ["weather", dayjs().format(globalFormatter)],
    queryFn: async () => {},
  },
});
