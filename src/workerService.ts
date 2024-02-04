import {startWorker} from '@conet.project/seguro-worker-lib/build'


import { ContainerData } from "@conet.project/seguro-worker-lib/build/workerBridge"

import {createPasscode as api_createPasscode, encrypt_TestPasscode, initListenState} from './API/index'
let workerService: ContainerData

type PasscodeFunctionParams = {
    passcode: string,
	locale: string,
    progress: (progress: any) => void
}

// initListenState('system', data => {
// 	workerService = {
// 		method: {
// 		},
// 		data: data,
// 		preferences: {},
// 		status: 'UNLOCKED'
// 	}
// })