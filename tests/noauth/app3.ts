import AppsHelpers = require('../apps_helpers');
import * as Sandbox from "../common/sandbox";

describe('app3 (label GRANTED_TO dev, no root)', function () {
    describe('user john can interact with terminal', function () {
        AppsHelpers.testInteractionsWithTerminal('john', 'app3');
    });

    describe("sandbox", () => {
        describe('user john can open sandbox', () => {
            Sandbox.testOpenSandbox('john', 'app3');
        });
    });
});
