'use strict';

import {watch} from 'node:fs';
import {WatchEventType} from "fs";

watch('./watchFile.ts', (event: WatchEventType, file) => {
    console.dir({event, file});
});
