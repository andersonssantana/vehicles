# Vehicles - Sistema de Gerenciamento de Veículos GTA

![Meteor](https://img.shields.io/badge/Meteor-DE4F4F?style=for-the-badge&logo=meteor&logoColor=white)
![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Real Time](https://img.shields.io/badge/Real_Time-FF6B6B?style=for-the-badge&logo=socketdotio&logoColor=white)

## 📋 Visão Geral

Este projeto é um sistema de gerenciamento de veículos inspirado no universo GTA (Grand Theft Auto), desenvolvido com Meteor.js e React. A aplicação permite visualizar, gerenciar e remover veículos de uma coleção, apresentando informações detalhadas sobre cada veículo, incluindo características especiais, upgrades e armamentos.

### 🎯 Objetivo do Projeto

O principal objetivo deste projeto é **praticar e compreender o funcionamento do framework Meteor.js** e seu ecossistema, incluindo:

- **📚 Aprendizado do Meteor.js**: Explorar as funcionalidades core do framework full-stack
- **☁️ Galaxy Cloud Service**: Entender e praticar o deploy usando o Galaxy, serviço de hospedagem oficial do Meteor
- **⚡ Real-time Features**: Implementar funcionalidades reativas e em tempo real
- **🗄️ MongoDB Integration**: Trabalhar com a integração nativa entre Meteor e MongoDB
- **📡 DDP Protocol**: Compreender o Distributed Data Protocol para sincronização de dados
- **🔄 Pub/Sub Pattern**: Implementar o padrão de publicação e subscrição do Meteor

Este projeto serve como um **laboratório prático** para familiarização com o Meteor.js antes de aplicá-lo em projetos mais complexos.

### 🎮 Sobre o Contexto

O sistema gerencia uma coleção de veículos fictícios do universo GTA, categorizando-os por tipo e apresentando informações como:
- **Categoria do veículo**
- **Local de armazenamento** no jogo
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

### 🎮 Funcionalidades da Aplicação
- **📱 Listagem Responsiva**: Visualização adaptável de veículos em cards organizados
- **🏷️ Sistema de Tags**: Identificação visual de upgrades e características especiais
- **🗑️ Remoção de Veículos**: Funcionalidade para remover veículos da coleção com confirmação
- **⚡ Tempo Real**: Atualizações automáticas usando reactive data do Meteor
- **📱 Mobile-First**: Interface otimizada para dispositivos móveis e desktop
- **🎯 UX Moderna**: Animações suaves e feedback visual aprimorado
- **♿ Acessibilidade**: Implementação de boas práticas de acessibilidade

## 💻 Tecnologias e Ferramentas

### 🚀 Meteor.js - Framework Full-Stack
- **Meteor.js**: Framework JavaScript isomórfico que unifica frontend, backend e banco de dados
- **Galaxy**: Serviço de hospedagem oficial do Meteor para deploy em produção na nuvem
- **DDP (Distributed Data Protocol)**: Protocolo proprietário para sincronização em tempo real
- **React Integration**: Sistema de templates reativo com suporte nativo ao React

### 🗄️ Banco de Dados e Backend
- **MongoDB**: Banco de dados NoSQL integrado nativamente ao Meteor
- **Publications & Subscriptions**: Sistema reativo de dados cliente-servidor
- **Meteor Methods**: RPC (Remote Procedure Calls) seguro para operações no servidor

### 🎨 Frontend e UI
- **React 18**: Biblioteca JavaScript para construção da interface com hooks modernos
- **meteor/react-meteor-data**: Integração oficial entre Meteor e React
- **CSS3 Moderno**: Variáveis CSS, Grid Layout, Flexbox e animações avançadas
- **Mobile-First Design**: Abordagem responsiva priorizando dispositivos móveis

### ☁️ Deploy e Hospedagem
- **Galaxy**: Plataforma oficial de deploy do Meteor na nuvem
- **MongoDB Atlas**: Integração com banco de dados MongoDB na nuvem

### Otimizações de Performance
- **Meteor Subscriptions**: Carregamento eficiente de dados com pub/sub pattern
- **React Hooks Otimizados**: Uso de useFind e useSubscribe do meteor/react-meteor-data
- **CSS Grid & Flexbox**: Layouts eficientes e responsivos
- **Lazy Loading**: Carregamento sob demanda de componentes

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
│   └── ui/                  # Componentes React
│       ├── App.jsx          # Componente raiz da aplicação
│       ├── Info.jsx         # Componente de listagem com subscriptions
│       └── VehicleCard.jsx  # Card individual de veículo
├── server/                  # Código do servidor
│   └── main.js              # Configurações do servidor e publicações
├── private/                 # Assets privados
│   └── veiculos_gta.json    # Dados iniciais dos veículos
└── package.json             # Dependências e scripts
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

## 📱 Responsividade Detalhada

### Abordagem Mobile-First

A aplicação foi desenvolvida priorizando a experiência móvel, com expansões progressivas para telas maiores:

#### 📱 Mobile (até 767px)
- Layout em coluna única
- Cards em stack vertical
- Botões full-width
- Header de cards empilhado

#### 📐 Tablet (768px - 1023px)
- Grid responsivo com 2 colunas
- Headers de cards horizontais
- Botões com tamanho otimizado

#### 🖥️ Desktop (1024px+)
- Grid com 3+ colunas
- Hover effects avançados
- Espaçamentos expandidos
- Animações aprimoradas

### Breakpoints Estratégicos

```css
/* Mobile First - Base */
.vehicles-list { 
  display: flex; 
  flex-direction: column; 
}

/* Tablet */
@media (min-width: 768px) {
  .vehicles-list { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .vehicles-list { 
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); 
  }
}
```

## 🎨 Sistema de Tags e Categorização

### Tags de Upgrade
- **🟢 Imani Tech**: Veículos com tecnologia anti-míssil e outras melhorias defensivas
- **🟠 HSW**: Veículos com upgrades de alta velocidade (Hao's Special Works)
- **🔴 Armado**: Veículos equipados com armamentos
- **🟣 Arena**: Veículos com upgrades da Arena War

### Categorias de Veículos
- **Carros Esportivos**: Veículos de alta performance
- **Motocicletas**: Motos de diversos tipos e categorias
- **Veículos Militares**: Tanques, blindados e veículos de combate
- **Aeronaves**: Aviões, helicópteros e outros veículos aéreos

## 🔧 Instalação e Execução

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **Meteor.js** (versão 2.0 ou superior)
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

### 🧪 Testes e Qualidade
- `meteor test` - Executa testes unitários
- `meteor test-app` - Executa testes de integração
- `meteor lint` - Verificação de código (se configurado)

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
  categoria: "Tipo/Categoria",
  local: "Local de Armazenamento",
  caracteristicas_principais: "Descrição das características",
  imani_tech: Boolean,
  hsw: Boolean,
  armado: Boolean,
  arena: Boolean,
  createdAt: Date
}
```

### Coleções MongoDB

- **VeiculosCollection**: Armazena todos os dados dos veículos

## ⚡ Funcionalidades do Meteor

### Publications & Subscriptions

```javascript
// Server - Publicação
Meteor.publish("veiculos", function () {
  return VeiculosCollection.find();
});

// Client - Subscrição
const isLoading = useSubscribe('veiculos');
const veiculos = useFind(() => VeiculosCollection.find());
```

### Métodos Seguros

```javascript
Meteor.methods({
  'veiculos.remove': function({ _id }) {
    return VeiculosCollection.removeAsync({ _id });
  }
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

### Vantagens do Meteor para Aprendizado:

1. **🔄 Isomorfismo**: Mesmo código JavaScript no cliente e servidor
2. **📡 DDP**: Compreensão de protocolos de sincronização em tempo real
3. **🎯 Convenção sobre Configuração**: Foco no desenvolvimento, não na configuração
4. **🛡️ Segurança Integrada**: Conceitos de segurança aplicados automaticamente
5. **📦 Ecossistema Completo**: Tudo necessário em um único framework

### Galaxy Cloud Service

**Experiência Prática com Deploy Profissional**:
- **☁️ Hospedagem Oficial**: Plataforma otimizada especificamente para Meteor
- **📊 Monitoramento**: Métricas detalhadas de performance e uso
- **🔒 Segurança**: SSL automático e proteções integradas
- **📈 Escalabilidade**: Auto-scaling baseado na demanda
- **💰 Modelo de Preços**: Compreensão de custos de hospedagem profissional

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### 🌐 Contato

- 🌐 [GitHub](https://github.com/andersonssantana/)
- 👔 [LinkedIn](https://www.linkedin.com/in/andersonssantana/)
- ✉️ [E-mail](mailto:anderssantana@outlook.com)

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

---

Desenvolvido com 🚀, ⚡ e 🎮 usando Meteor.js e React
