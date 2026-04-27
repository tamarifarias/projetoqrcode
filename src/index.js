import pronpt from "prompt";

import PromptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/qr-code/password/create.js";

async function main() {
    pronpt.get(PromptSchemaMain, async (err, choose) => {
        if (err) {
            console.error(chalk.red("Erro:", err));
            return;
        }
        if (choose.select == 1) await createQRCode();
        if (choose.select == 2) await createPassword();
    });

    pronpt.start();
}

main();