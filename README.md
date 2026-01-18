# Vehicles - Sistema de Gerenciamento de Veículos GTA

![Meteor](https://img.shields.io/badge/Meteor-DE4F4F?style=for-the-badge&logo=meteor&logoColor=white)
![Galaxy Deploy](https://img.shields.io/badge/Galaxy-Deployed-success?style=for-the-badge&logo=meteor&logoColor=white)
![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Real Time](https://img.shields.io/badge/Real_Time-FF6B6B?style=for-the-badge&logo=socketdotio&logoColor=white)

## 📋 Visão Geral

Este projeto é um **sistema completo de gerenciamento de veículos** inspirado no universo GTA (Grand Theft Auto), desenvolvido com Meteor.js e React. A aplicação permite **visualizar, cadastrar, editar e remover** veículos de uma coleção, apresentando informações detalhadas sobre cada veículo, incluindo características especiais, upgrades e armamentos.

## 🌐 Demo ao Vivo

**🚀 Aplicação em Produção**: [https://gtavehiclelist.meteorapp.com](https://gtavehiclelist.meteorapp.com)

A aplicação está **online e funcional** no Galaxy Cloud Service da Meteor, demonstrando a implementação completa do sistema em ambiente de produção com todas as funcionalidades CRUD operacionais.

### 🎯 Objetivo do Projeto

O principal objetivo deste projeto é **praticar e compreender o funcionamento do framework Meteor.js** e seu ecossistema, incluindo:

- **📚 Aprendizado do Meteor.js**: Explorar as funcionalidades core do framework full-stack
- **☁️ Galaxy Cloud Service**: Entender e praticar o deploy usando o Galaxy, serviço de hospedagem oficial do Meteor
- **⚡ Real-time Features**: Implementar funcionalidades reativas e em tempo real
- **🗄️ MongoDB Integration**: Trabalhar com a integração nativa entre Meteor e MongoDB
- **📡 DDP Protocol**: Compreender o Distributed Data Protocol para sincronização de dados
- **🔄 Pub/Sub Pattern**: Implementar o padrão de publicação e subscrição do Meteor
- **🛠️ CRUD Operations**: Implementar operações completas de Create, Read, Update e Delete

Este projeto serve como um **laboratório prático** para familiarização com o Meteor.js antes de aplicá-lo em projetos mais complexos.

### 🎮 Sobre o Contexto

O sistema gerencia uma coleção de veículos fictícios do universo GTA, categorizando-os por tipo e apresentando informações como:
- **Categoria do veículo** (15 categorias disponíveis: Commercial, Compacts, Coupes, Cycles, Military, Motorcycles, Muscle, Off-Road, Open Wheel, Sedans, Service, Sports, Sports Classics, Super, Vans)
- **Local de armazenamento** no jogo (12 locais predefinidos: Agency, Arcade, Arena Workshop, Casino Penthouse, Facility, Garment Factory, Office Garages, etc.)
- **Características principais** e especificações
- **Upgrades especiais** (Imani Tech, HSW, Arena War)
- **Capacidades de combate** (veículos armados)

## 🚀 Funcionalidades

### 🎯 Funcionalidades Educacionais (Meteor.js)
- **📊 Reactive Data**: Demonstração do sistema reativo do Meteor com atualizações automáticas
- **🔄 Real-time Sync**: Sincronização em tempo real entre múltiplos clientes
- **📡 Pub/Sub Pattern**: Implementação prática de publicações e subscrições
- **🛡️ Meteor Methods**: RPC seguro para operações no servidor
- **🗄️ MongoDB Collections**: Manipulação de dados com Minimongo no cliente
- **🔐 Data Security**: Validação e sanitização de dados no servidor

### 🎮 Funcionalidades da Aplicação

#### 📋 **Gestão Completa de Veículos (CRUD)**
- **➕ Cadastro de Veículos**: Formulário completo com dropdowns para categorias e locais predefinidos
- **✏️ Edição de Veículos**: Interface para modificar informações de veículos existentes
- **🗑️ Remoção de Veículos**: Exclusão segura com confirmação para evitar remoções acidentais

#### 🎨 **Interface e Experiência do Usuário**
- **📱 Listagem Responsiva**: Visualização adaptável de veículos em tabela
- **🏷️ Sistema de Tags**: Identificação visual de upgrades e características especiais
- **📊 Ordenação Dinâmica**: Ordenar por nome do veículo ou local de armazenamento (ascendente/descendente)
- **⚡ Tempo Real**: Atualizações automáticas usando reactive data do Meteor
- **📱 Mobile-First**: Interface otimizada para dispositivos móveis e desktop
- **🎯 UX Moderna**: Animações suaves, feedback visual e transições aprimoradas
- **♿ Acessibilidade**: Implementação de boas práticas de acessibilidade
- **🔄 Estados de Loading**: Indicadores visuais durante carregamento de dados

#### 🛡️ **Validação e Segurança**
- **✅ Validação de Formulários**: Campos obrigatórios e dropdowns com opções predefinidas
- **🔒 Confirmações de Ação**: Modais de confirmação para ações destrutivas
- **🛡️ Sanitização de Dados**: Tratamento seguro de entrada de dados
- **📝 Feedback de Erros**: Mensagens informativas para o usuário

## 💻 Tecnologias e Ferramentas

### 🚀 Meteor.js - Framework Full-Stack
- **Meteor.js 3.2**: Framework JavaScript isomórfico que unifica frontend, backend e banco de dados
- **Galaxy**: Serviço de hospedagem oficial do Meteor para deploy em produção na nuvem
- **DDP (Distributed Data Protocol)**: Protocolo proprietário para sincronização em tempo real
- **React Integration**: Sistema de templates reativo com suporte nativo ao React
- **Meteor Methods**: Sistema RPC para operações seguras no servidor

### 🗄️ Banco de Dados e Backend
- **MongoDB**: Banco de dados NoSQL integrado nativamente ao Meteor
- **Publications & Subscriptions**: Sistema reativo de dados cliente-servidor
- **Minimongo**: Versão client-side do MongoDB para cache local reativo
- **AsyncAPI**: Operações assíncronas para melhor performance

### 🎨 Frontend e UI
- **React 18**: Biblioteca JavaScript para construção da interface com hooks modernos
- **meteor/react-meteor-data**: Integração oficial entre Meteor e React
- **useFind & useSubscribe**: Hooks reativos para integração Meteor-React
- **CSS3 Moderno**: Variáveis CSS, Grid Layout, Flexbox e animações avançadas
- **Mobile-First Design**: Abordagem responsiva priorizando dispositivos móveis

### ☁️ Deploy e Hospedagem
- **Galaxy**: Plataforma oficial de deploy do Meteor na nuvem
- **MongoDB Atlas**: Integração com banco de dados MongoDB na nuvem
- **Continuous Deployment**: Deploy automático com sincronização em tempo real

### Otimizações de Performance
- **Meteor Subscriptions**: Carregamento eficiente de dados com pub/sub pattern
- **React Hooks Otimizados**: Uso de useFind e useSubscribe do meteor/react-meteor-data
- **CSS Grid & Flexbox**: Layouts eficientes e responsivos
- **Component State Management**: Gerenciamento eficiente de estado local

## 🧠 Arquitetura e Padrões

### Estrutura do Projeto

```bash
projeto-vehicles/
├── client/                   # Código do cliente
│   ├── main.html            # Template HTML principal
│   ├── main.jsx             # Ponto de entrada React
│   └── main.css             # Estilos globais da aplicação
├── imports/                 # Código compartilhado
│   ├── api/                 # Definições de coleções e métodos
│   │   └── veiculos.js      # Coleção de veículos
│   ├── helpers/             # Utilitários e constantes
│   │   ├── categories.js    # Lista de categorias de veículos
│   │   └── possibleLocations.js # Lista de locais de armazenamento
│   └── ui/                  # Componentes React
│       ├── App.jsx          # Componente raiz da aplicação
│       ├── Info.jsx         # Componente principal com subscriptions
│       ├── VehicleCard.jsx  # Card individual de veículo
│       ├── VehicleRow.jsx   # Linha individual de veículo
│       ├── AddVehicleForm.jsx    # Formulário de cadastro
│       └── EditVehicleForm.jsx   # Formulário de edição
├── server/                  # Código do servidor
│   └── main.js              # Configurações do servidor, publicações e métodos
├── private/                 # Assets privados
│   └── veiculos_gta.json    # Dados iniciais dos veículos
└── package.json             # Dependências e scripts
```

### Arquivos de Helpers

#### 📂 `imports/helpers/categories.js`
Define as 16 categorias de veículos disponíveis no sistema:
```javascript
const categories = [
  "Commercial", "Compacts", "Coupes", "Cycles", "Military", "Motorcycles", "Muscle", "Off-Road", "Open Wheel", "Sedans", "Service", "Sports", "Sports Classics", "Super", "SUVs", "Vans"
];
```

#### 📂 `imports/helpers/possibleLocations.js`
Define os 13 locais de armazenamento predefinidos:
```javascript
const possibleLocations = [
  "Agency: Hawick", "Arcade: Eight-Bit - Vinewood", "Arena Workshop", "Auto Shop: Strawberry", "Casino Master Penthouse", "Facility: Lago Zancudo", "Garment Factory", "Integrity Way, 28", "MC Clubhouse: Downtown Vinewood","Office Garage 1", "Office Garage 2", "Office Garage 3", "Terrorbyte"
];
```

### Fluxo de Dados e Estados

```javascript
// Estados principais da aplicação
const [isAdding, setIsAdding] = useState(false);           // Modo cadastro
const [editingVehicle, setEditingVehicle] = useState(null); // Modo edição
const [sortKey, setSortKey] = useState('veiculo');         // Chave de ordenação
const [sortOrder, setSortOrder] = useState(1);             // Ordem (1 ou -1)

// Subscription reativa com ordenação dinâmica
const isLoading = useSubscribe('veiculos');
const veiculos = useFind(
  () => VeiculosCollection.find({}, { sort: { [sortKey]: sortOrder } }),
  [sortKey, sortOrder]
);
```

### Sistema de Design

```css
:root {
  /* Paleta de Cores */
  --color-primary: #007bff;
  --color-success: #28a745;
  --color-warning: #fd7e14;
  --color-danger: #dc3545;
  
  /* Espacamentos */
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  /* Sombras e Bordas */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --border-radius: 8px;
  
  /* Transições */
  --transition: all 0.3s ease;
}
```

## 🛠️ Implementação CRUD Detalhada

### ➕ **Create (Cadastro)**
```javascript
// Método server-side
'veiculos.insert': function (vehicleData) {
  return VeiculosCollection.insertAsync({
    ...vehicleData,
    createdAt: new Date(),
  });
}

// Componente AddVehicleForm.jsx com dropdowns
const handleSubmit = () => {
  const vehicleData = {
    veiculo, categoria, local,
    caracteristicas_especiais: caracteristicasEspeciais,
    imani_tech: imaniTech, hsw, armado, arena,
  };
  
  Meteor.call('veiculos.insert', vehicleData, (error) => {
    if (error) {
      console.error('Erro ao adicionar veículo:', error);
    } else {
      onSave(); // Volta para visualização
    }
  });
};
```

### 📖 **Read (Leitura) com Ordenação**
```javascript
// Publication server-side
Meteor.publish("veiculos", function () {
  return VeiculosCollection.find();
});

// Subscription client-side com ordenação dinâmica
const veiculos = useFind(
  () => VeiculosCollection.find({}, { sort: { [sortKey]: sortOrder } }),
  [sortKey, sortOrder]
);
```

### ✏️ **Update (Edição)**
```javascript
// Método server-side
'veiculos.update': function (vehicleData) {
  const { _id, ...updateData } = vehicleData;
  return VeiculosCollection.updateAsync(_id, { $set: updateData });
}

// Componente EditVehicleForm.jsx com estado unificado
const [formData, setFormData] = useState({ ...veiculo });

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value,
  }));
};
```

### 🗑️ **Delete (Remoção)**
```javascript
// Método server-side
'veiculos.remove': function ({ _id }) {
  return VeiculosCollection.removeAsync({ _id });
}

// Componente VehicleCard.jsx com confirmação
const handleRemoveVehicle = (veiculo) => {
  if (window.confirm('Tem certeza que deseja remover este veículo?')) {
    Meteor.call('veiculos.remove', veiculo);
  }
};
```

## 🎨 Sistema de Tags e Categorização

### Tags de Upgrade
- **🟢 Imani Tech**: Veículos com tecnologia anti-míssil e outras melhorias defensivas
- **🟠 HSW**: Veículos com upgrades de alta velocidade (Hao's Special Works)
- **🔴 Armado**: Veículos equipados com armamentos
- **🟣 Arena**: Veículos com upgrades da Arena War

### Sistema de Ordenação
- **📊 Ordenação por Nome**: Ordem alfabética dos veículos
- **📍 Ordenação por Local**: Agrupamento por local de armazenamento
- **🔄 Alternância de Ordem**: Ascendente (↑) ou Descendente (↓)

### CSS das Tags
```css
.tag-imani { background: linear-gradient(135deg, #2c7a4b, #4acfa9); }
.tag-hsw { background: linear-gradient(135deg, #d2691e, #ff9f43); }
.tag-armed { background: linear-gradient(135deg, #8b1a1a, #b22222); }
.tag-arena { background: linear-gradient(135deg, #483d8b, #7b68ee); }
```

## 📱 Responsividade Detalhada

### Abordagem Mobile-First

A aplicação foi desenvolvida priorizando a experiência móvel, com expansões progressivas para telas maiores:

#### 📱 Mobile (até 767px)
- Tabela com duas colunas essenciais
- Botões full-width
- Formulários otimizados para touch

#### 🖥️ Desktop (1024px+)
- Tabela full-size
- Hover effects avançados
- Espaçamentos expandidos
- Animações aprimoradas

## 🔧 Instalação e Execução

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **Meteor.js** (versão 3.2 ou superior)
- **MongoDB** (incluído com Meteor)

### Passo a Passo

1. **Clone o repositório**:
   ```bash
   git clone git@github.com:andersonssantana/vehicles.git
   cd vehicles
   ```

2. **Instale o Meteor.js** (se não estiver instalado):
   ```bash
   curl https://install.meteor.com/ | sh
   ```

3. **Instale as dependências**:
   ```bash
   meteor npm install
   ```

4. **Inicie a aplicação**:
   ```bash
   meteor run
   ```

5. **Acesse a aplicação**:
   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **MongoDB**: [http://localhost:3001](http://localhost:3001) (Mongo Admin)

## 📋 Scripts Disponíveis

### 🔧 Desenvolvimento Local
- `meteor run` - Inicia o servidor de desenvolvimento com hot-reload
- `meteor npm install` - Instala dependências do projeto
- `meteor reset` - Reseta o banco de dados local (útil para testes)
- `meteor mongo` - Acessa o console MongoDB local

### 🚀 Build e Deploy
- `meteor build` - Gera build de produção
- `meteor deploy [app-name]` - Deploy gratuito para Galaxy (subdomínio .meteorapp.com)
- `meteor deploy [app-name] --settings settings.json` - Deploy com configurações específicas

## 🗄️ Estrutura de Dados

### Modelo do Veículo

```javascript
{
  _id: "ObjectId",
  veiculo: "Nome do Veículo",
  categoria: "Tipo/Categoria", // Uma das 15 categorias predefinidas
  local: "Local de Armazenamento", // Um dos 12 locais predefinidos
  caracteristicas_especiais: "Descrição das características",
  imani_tech: Boolean,
  hsw: Boolean,
  armado: Boolean,
  arena: Boolean,
  createdAt: Date
}
```

### Coleções MongoDB

- **VeiculosCollection**: Armazena todos os dados dos veículos com índices otimizados

## ⚡ Funcionalidades do Meteor

### Publications & Subscriptions

```javascript
// Server - Publicação
Meteor.publish("veiculos", function () {
  return VeiculosCollection.find();
});

// Client - Subscrição com ordenação
const isLoading = useSubscribe('veiculos');
const veiculos = useFind(
  () => VeiculosCollection.find({}, { sort: { [sortKey]: sortOrder } }),
  [sortKey, sortOrder]
);
```

### Métodos Seguros

```javascript
Meteor.methods({
  'veiculos.insert': function (vehicleData) { /* ... */ },
  'veiculos.update': function (vehicleData) { /* ... */ },
  'veiculos.remove': function ({ _id }) { /* ... */ }
});
```

## 🎯 Decisões Técnicas

### Por que Meteor.js?

**Objetivo Educacional**: Este framework foi escolhido especificamente para **aprendizado e prática** devido às suas características únicas:

- **📚 Curva de Aprendizado**: Ideal para entender conceitos full-stack de forma integrada
- **🚀 Prototipagem Rápida**: Permite criar aplicações completas rapidamente
- **⚡ Real-time por Padrão**: Funcionalidades reativas sem configuração complexa
- **🗄️ MongoDB Nativo**: Integração transparente com banco NoSQL
- **☁️ Deploy Simplificado Galaxy**: Experiência prática com deploy em nuvem profissional
- **🛠️ CRUD Integrado**: Operações de banco de dados simplificadas com Meteor Methods

### Vantagens da Estrutura com Helpers:

1. **🔄 Reutilização**: Categories e possibleLocations são utilizados em múltiplos componentes
2. **🛡️ Consistência**: Dados padronizados evitam inconsistências na interface
3. **🔧 Manutenibilidade**: Alterações centralizadas em arquivos específicos
4. **📦 Modularidade**: Separação clara entre dados de configuração e lógica de negócio
5. **🎯 Facilidade de Expansão**: Novos locais e categorias podem ser adicionados facilmente

### Galaxy Cloud Service

**Experiência Prática com Deploy Profissional**:
- **☁️ Hospedagem Oficial**: Plataforma otimizada especificamente para Meteor
- **📊 Monitoramento**: Métricas detalhadas de performance e uso
- **🔒 Segurança**: SSL automático e proteções integradas
- **📈 Escalabilidade**: Auto-scaling baseado na demanda
- **💰 Modelo de Preços**: Compreensão de custos de hospedagem profissional

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### Documentação e Recursos de Aprendizado

#### 📚 Meteor.js
- 🌟 [Meteor.js Official Documentation](https://docs.meteor.com/)
- 🎓 [Meteor.js Tutorial](https://www.meteor.com/tutorials)
- 📖 [Discover Meteor Book](https://www.discovermeteor.com/)

#### ☁️ Galaxy Cloud Service
- 🚀 [Galaxy Documentation](https://galaxy-guide.meteor.com/)
- 💰 [Galaxy Pricing](https://www.meteor.com/cloud)
- 📊 [Galaxy APM](https://galaxy-guide.meteor.com/apm.html)

#### ⚛️ React + Meteor
- 🔗 [React with Meteor Guide](https://guide.meteor.com/react.html)
- 📦 [meteor/react-meteor-data](https://github.com/meteor/react-packages)

#### 🗄️ MongoDB
- 🍃 [MongoDB Documentation](https://docs.mongodb.com/)
- 📚 [MongoDB University](https://university.mongodb.com/)

## 🌐 Contato

- 🌐 [GitHub](https://github.com/andersonssantana/)
- 👔 [LinkedIn](https://www.linkedin.com/in/andersonssantana/)
- ✉️ [E-mail](mailto:anderssantana@outlook.com)

---

Desenvolvido com 🚀, ⚡ e 🎮 usando Meteor.js e React | **Sistema CRUD Completo em Produção**

Galaxy Cloud Service | MongoDB | Real-time Features | Mobile-First Design
