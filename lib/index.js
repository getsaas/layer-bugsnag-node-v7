const ENV_THRUTHY = ['true', '1', 'yes', 'y'];

const LAYER_VERSION = 'v0.0.1';
const LAYER_NAME = '@getsaas/layer-bugsnag-node-v7';

if (ENV_THRUTHY.includes(process.env.PRINT_SAAS_LAYER_VERSION)) {
    console.log(`Using ${LAYER_NAME} @ ${LAYER_VERSION}`);
}
