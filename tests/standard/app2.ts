import AppsHelpers = require('../apps_helpers');
import * as Sandbox from "../common/sandbox";

describe('app2 (label GRANTED_TO harry, no root)', function () {
    this.timeout(30000);
    this.retries(3);

    describe('super admin user john can interact with terminal', function () {
        AppsHelpers.testInteractionsWithTerminal('john', 'app2');
    });

    describe('user harry can interact with terminal', function () {
        AppsHelpers.testInteractionsWithTerminal('harry', 'app2');
    });

    describe('grant access button is displayed to john', function () {
        AppsHelpers.testShouldSeeGrantAccessButton('john', 'app2');
    })

    describe('user james is unauthorized', function () {
        AppsHelpers.testUnauthorizedUser('james', 'app2');
    });

    describe("sandbox", () => {
        describe('super admin user john can open sandbox', () => {
            Sandbox.testOpenSandbox('john', 'app2');
        });

        describe('user harry is authorized to open sandbox', () => {
            Sandbox.testOpenSandbox('harry', 'app2');
        });

        describe('user james is not authorized to open sandbox', () => {
            Sandbox.testSandboxUnauthorized('james', 'app2');
        });
    });
});
