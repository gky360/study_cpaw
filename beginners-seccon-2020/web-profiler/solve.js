const fetch = require('node-fetch');
const {
  getIntrospectionQuery,
  buildClientSchema,
  printSchema,
} = require('graphql');

const GRAPHQL_ENDPOINT = 'https://profiler.quals.beginners.seccon.jp/api';

async function main() {
  try {
    const response = await fetch(
      GRAPHQL_ENDPOINT,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: getIntrospectionQuery() }),
      }
    );
    const { data } = await response.json();
    const schema = buildClientSchema(data);
    console.log(printSchema(schema));
  } catch (err) {
    console.error(err);
  }
}

main();

