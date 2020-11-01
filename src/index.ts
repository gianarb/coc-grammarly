import {ExtensionContext, services, workspace, LanguageClient, TransportKind} from 'coc.nvim'

export async function activate(context: ExtensionContext): Promise<void> {
  const config = workspace.getConfiguration().get<any>('grammarly', {}) as any
  const serverOptions = {
    // TODO: Somehow this has to be embedded
    module: "/Users/gianarb/git/grammarly/out/server.js",
    transport: TransportKind.ipc,
    options: {
      cwd: workspace.root,
      execArgv: config.execArgv || []
    }
  }
  const clientOptions = {
    documentSelector: ['markdown', 'md'],
  }
  const client = new LanguageClient(
    'coc-grammarly', // the id
    'coc-grammarly', // the name of the language server
    serverOptions,
    clientOptions
  )
  context.subscriptions.push(services.registLanguageClient(client))
}


