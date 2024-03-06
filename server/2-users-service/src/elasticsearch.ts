import { Client } from '@elastic/elasticsearch';
import { ClusterHealthResponse } from '@elastic/elasticsearch/lib/api/types';
import { config } from '@users/config';
import { Logger } from 'winston';

import { winstonLogger } from './utils/logger';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'usersElasticSearchServer', 'debug');

const elasticSearchClient = new Client({
  node: `${config.ELASTIC_SEARCH_URL}`
});

const checkConnection = async (): Promise<void> => {
  let isConnected = false;
  while (!isConnected) {
    try {
      const health: ClusterHealthResponse = await elasticSearchClient.cluster.health({});
      log.info(`UsersService Elasticsearch health status - ${health.status}`);
      isConnected = true;
    } catch (error) {
      log.info(`ELASTIC_SEARCH_URL is ${config.ELASTIC_SEARCH_URL}`);
      log.error('Connection to Elasticsearch failed. Retrying...');
      log.log('error', 'UsersService checkConnection() method:', error);
    }
  }
};

export { checkConnection };
