import { SupportedPlugin } from '../types/pluginBridges';

import { alertingApi } from './alertingApi';

interface IncidentsPluginConfigDto {
  isChatOpsInstalled: boolean;
  isIncidentCreated: boolean;
}

const getProxyApiUrl = (path: string) => `/api/plugins/${SupportedPlugin.Incident}/resources${path}`;

export const incidentsApi = alertingApi.injectEndpoints({
  endpoints: (build) => ({
    getIncidentsPluginConfig: build.query<IncidentsPluginConfigDto, void>({
      query: (integration) => ({
        url: getProxyApiUrl('/api/ConfigurationTrackerService.GetConfigurationTracker'),
        data: integration,
        method: 'POST',
        showErrorAlert: false,
      }),
    }),
  }),
});
