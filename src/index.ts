import {ExtensionContext, services, workspace, LanguageClient, TransportKind} from 'coc.nvim'
import {resolve} from 'path';

export async function activate(context: ExtensionContext): Promise<void> {
  const config = workspace.getConfiguration().get<any>('grammarly', {}) as any
  let serverModule = resolve(context.extensionPath, 'lib', 'server')
  if (config.pathGrammarlyLSP != undefined) {
    serverModule = config.pathGrammarlyLSP
  }
  const serverOptions = {
    module: serverModule,
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


