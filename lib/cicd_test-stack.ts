import * as cdk from '@aws-cdk/core';

export class CicdTestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('JoeKenney/CICDTest', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });
    // The code that defines your stack goes here
  }
}
