import AppsHelpers = require('../apps_helpers');
import * as Sandbox from "../common/sandbox";

describe('app5 (no label, root user)', function () {
    this.retries(3);

    describe('user john can interact with terminal', function () {
        AppsHelpers.testInteractionsWithTerminal('john', 'app5');
    });

    describe("sandbox", () => {
        describe('user john can open sandbox', () => {
            Sandbox.testOpenSandbox('john', 'app5');
        });
    });
});
