/**
 * Required External Modules
 */
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { itemsRouter } from './items/items.router';
import { errorHandler } from "./middleware/error.middleware";

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT){
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/items", itemsRouter);
// Add Error Handler
app.use(errorHandler);

/**
 * Server Activation
 */
const server = app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

/**
 * Webpack HMR Activation
 */
type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}