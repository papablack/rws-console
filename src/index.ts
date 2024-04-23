import * as rwsShell from './tools/shell';
import * as rwsPath from './tools/path';
import * as rwsFS from './tools/fs';
import { ConfigBuilder } from './tools/config_builder';
import rwsArgsHelper, {RWSInputType, IOutputOpts}  from './helpers/_run';

import { RWSManagedConsole, loadAction, bootstrap, RWSCliBootstrap,  } from './helpers/_managed_console';

const rwsCli = {
    loadAction, bootstrap, RWSCliBootstrap
};

export {
    ConfigBuilder as RWSConfigBuilder,
    rwsShell,
    rwsPath,
    rwsFS,
    RWSManagedConsole,
    rwsArgsHelper,
    rwsCli,
    RWSInputType,
    IOutputOpts
};

export default rwsCli;