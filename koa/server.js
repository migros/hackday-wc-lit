import Router from "@koa/router";
import Koa from "koa";
import { nodeResolve } from "koa-node-resolve";
import staticFiles from "koa-static";
import { RenderResultReadable } from "wc-ssr-test";
import { renderIndex } from "./pages/index.js";

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.type = "text/html";
  ctx.body = new RenderResultReadable(renderIndex('world'));
});

app.use(router.routes());
app.use(nodeResolve());
app.use(staticFiles("."));
app.listen(3000);
