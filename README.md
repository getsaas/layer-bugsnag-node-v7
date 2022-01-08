# @getsaas/layer-bugsnag-node-v7

An AWS Lambda Layer for node apps using Bugsnag SDK v7.x

## Deploying to your AWS account

Coming soon

## What's included

Here's the list of packages provided by this layer:

| Package                      | Version   | Why?                        |
| :--------------------------- | :-------- | :-------------------------- |
| `@bugsnag/js`                | `^7.14.1` | [Bugsnag JS SDK]            |
| `@bugsnag/plugin-aws-lambda` | `^7.14.1` | [Bugsnag AWS Lambda Plugin] |
| `@bugsnag/core`              | `^7.14.0` | Required by `@bugsnag/js`   |

## Usage

### As a NodeJS dependency in your project

In your project directory:

`yarn add @getsaas/layer-bugsnag-node-v7`

or

`npm i -S @getsaas/layer-bugsnag-node-v7`

Now when you build and deploy your lambda function, the `node_modules` directory will include all dependencies in the layer.

### As an AWS Lambda layer

In your project directory:

`yarn add -D @getsaas/layer-bugsnag-node-v7`

or

`npm i -D @getsaas/layer-bugsnag-node-v7`

When you build your lambda function for deployment, make sure to only install `production` dependencies. Then:

1. Go to the details page for your AWS Lambda Function,
2. Click on Layers and then on `Add a layer`,
3. Select `Custom layers (Choose a layer from a list of layers created by your AWS account or organization.)` as the Layer source,
4. From the `Custom layers` dropdown list, select `getsaas-layer-bugsnag-node-v7` and select the appropriate layer version:

![Provide layer ARN](https://raw.githubusercontent.com/getsaas/layer-bugsnag-node-v7/master/img/usage.png 'Provide layer ARN screenshot')

[Bugsnag JS SDK]: https://docs.bugsnag.com/platforms/javascript
[Bugsnag AWS Lambda Plugin]: https://docs.bugsnag.com/platforms/javascript/aws-lambda/
