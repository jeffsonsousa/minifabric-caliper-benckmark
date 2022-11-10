# Como levantar uma rede blockchain permissionada e testar sua performance com Hyperledger Caliper 

Este repositorio tem por objetivo apresentar um tutorial baseado na experiência conjunta entre a pesquisadores da UFPa, Amachains, CPQD e ITSRio sobre a implantação de um ambiente blockchain Fabric e como realizar testes de performance com o Hyperledger Caliper. O propósito do compartilhamento da experiência é facilitar o trabalho de equipes que desejem realizar implantações semelhantes ou de profissionais que tenham interesse nos métodos de implementação utilizados, bem como identificar falhas e definir uma metodologia mais assertiva no processo de implantação.

## Requisitos

* Docker CE
* Npm
* Node


### Instalação do minifabric

O primeiro passo para instalação do minifabric é realizar a verificação dos pré-requisitos para a instalação. Após o atendimento aos pré-requisitos, o script do Minifabric pode ser obtido e instalado através de seu repositório oficial.

```
sudo curl -o minifab -sL https://tinyurl.com/yxa2q6yr && sudo chmod +x minifab && sudo mv minifab /usr/local/bin
sudo minifab up -o org1.example.com -e 7050 -s couchdb -n simple -l node -p '"invoke","a","10","b","15"'
sudo minifab profilegen
npm init -y && npm install --only=prod @hyperledger/caliper-cli@0.4.2 && npx caliper bind --caliper-bind-sut fabric:2.2
npx caliper launch manager --caliper-workspace ./ --caliper-networkconfig networkConfig.yaml --caliper-benchconfig benchmark.yaml --caliper-flow-only-test --caliper-fabric-gateway-enabled --caliper-fabric-gateway-localhost=false

```
