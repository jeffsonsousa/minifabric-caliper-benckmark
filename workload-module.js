'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

function generateString(tam) {
            var randomString = "";
            var strings = 'QWERTYUIOPASDFGHJKLÇZXCVBNM'
            for (var i = 0; i < tam; i++) {
                randomString += strings.charAt(Math.floor(Math.random() * strings.length));
            }
            return randomString;
        }

function generateNumber(tam) {
            var randomNumber = "";
            var numbers = '0123456789';
            for (var i = 0; i < tam; i++) {
                randomNumber += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }
            return randomNumber;
        }


class MyWorkload extends WorkloadModuleBase {
    constructor() {
        super();
    }

    /**
    * Initialize the workload module with the given parameters.
    * @param {number} workerIndex The 0-based index of the worker instantiating the workload module.
    * @param {number} totalWorkers The total number of workers participating in the round.
    * @param {number} roundIndex The 0-based index of the currently executing round.
    * @param {Object} roundArguments The user-provided arguments for the round from the benchmark configuration file.
    * @param {ConnectorBase} sutAdapter The adapter of the underlying SUT.
    * @param {Object} sutContext The custom context object provided by the SUT adapter.
    * @async
    */
    async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext) {
        await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);
    }
    async submitTransaction() {
        let send = generateString(7)
        let recv = generateString(7)
        let value = generateNumber(2)

        const myArgs = {
            contractId: this.roundArguments.contractId,
            contractFunction: 'invoke',
            invokerIdentity: 'admin',
            contractArguments: [send, recv, value],
            readOnly: false
        };

        await this.sutAdapter.sendRequests(myArgs);
    }
}

function createWorkloadModule() {
    return new MyWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;
