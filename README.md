# minifabric-caliper-benckmark

Este repositorio tem por objetivo apresentar um tutorial baseado na experiência conjunta entre a pesquisadores da UFPa, Amachains, CPQD e ITSRio sobre a implantação de um ambiente blockchain Fabric e como realizar testes de performance com o Hyperledger Caliper.

## O primeiro passo para instalação do minifabric é realizar a verificação dos pré-requisitos para a instalação. Após o atendimento aos pré-requisitos, o script do Minifabric pode ser obtido e instalado através de seu repositório oficial.

sudo curl -o minifab -sL https://tinyurl.com/yxa2q6yr && sudo chmod +x minifab && sudo mv minifab /usr/local/bin
sudo minifab up -o peer1.org1.example.com -e 7050 -s couchdb -n simple -l node -p '"invoke","SEND","25","RECV","35"' 

