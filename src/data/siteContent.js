export const siteContent = {
  announcement: {
    label: "New",
    text: "Rovdex 正在为增长、运营与产品团队开放设计合作席位。",
    action: "加入候选名单",
    href: "#contact",
  },
  navLinks: [
    { label: "系统概览", href: "#system" },
    { label: "能力模块", href: "#capabilities" },
    { label: "典型场景", href: "#use-cases" },
    { label: "结果证据", href: "#proof" },
    { label: "FAQ", href: "#faq" },
    { label: "联系", href: "#contact" },
  ],
  hero: {
    eyebrow: "Strategic Operating System",
    title: "让业务决策看起来像一块被实时驱动的作战屏。",
    lead:
      "Rovdex 把指标波动、团队动作、机会判断与执行状态压缩进同一套操作界面。它不是又一个 BI 面板，也不是任务系统的叠加层，而是一种面向增长团队的实时决策基础设施。",
    metrics: [
      { value: "08s", label: "从异常发现到进入上下文" },
      { value: "3x", label: "跨团队协作效率提升" },
      { value: "100%", label: "关键动作可追踪" },
    ],
    actions: [
      { label: "查看系统概览", href: "#system", variant: "primary" },
      { label: "查看价值证明", href: "#proof", variant: "secondary" },
    ],
  },
  heroPanel: {
    topline: ["Live Strategy Feed", "RDX-CORE"],
    terminal: [
      { key: "market.volatility", value: "HIGH" },
      { key: "campaign.signal", value: "+18.4%" },
      { key: "team.response", value: "READY" },
    ],
    cards: [
      {
        kind: "spotlight",
        label: "North Star",
        title: "Expansion Velocity",
        text: "把增长策略、执行优先级与组织反馈同步在同一张运营地图里。",
      },
      {
        kind: "stat",
        label: "Signal Stack",
        title: "42",
        text: "实时上下文维度正在参与判断",
      },
      {
        kind: "mini",
        label: "Ops Queue",
        items: [
          "Pricing shift review",
          "Retention risk response",
          "Launch readiness alignment",
        ],
      },
      {
        kind: "pulse",
        label: "Decision Pulse",
      },
    ],
  },
  trust: {
    eyebrow: "Built for Real Operators",
    title: "不是给某一个部门看的屏，而是给整个业务系统使用的控制面。",
    roles: ["Growth", "Operations", "Product", "Strategy", "Leadership"],
    stats: [
      {
        title: "Single Context",
        text: "指标、反馈、任务与责任边界被统一组织。",
      },
      {
        title: "Fast Alignment",
        text: "减少跨团队来回解释和反复同步的时间损耗。",
      },
      {
        title: "Operational Memory",
        text: "每次决策都能留下可复用的组织经验。",
      },
    ],
  },
  system: {
    eyebrow: "System Overview",
    title: "不是展示结果，而是直接介入业务判断、优先级排序和组织动作。",
    intro: {
      title: "Rovdex 让一线信号和高层判断处在同一界面。",
      text:
        "当市场变化、产品反馈、用户行为和团队动作同时发生时，最难的不是看到数据，而是把这些变化转成可以立刻推进的决策。Rovdex 通过统一上下文层、策略层和执行层，把“发现问题”和“启动行动”之间的断点抹平。",
    },
    points: [
      "统一摄取业务信号、经营指标与执行状态",
      "针对异常、机会和延迟形成明确优先级",
      "用可追踪责任链推动多团队协作",
      "把每次行动结果重新写回策略系统",
    ],
    layers: [
      { title: "Context Layer", text: "指标、反馈、事件、依赖关系" },
      { title: "Decision Layer", text: "判断依据、优先级、负责人、时限" },
      { title: "Execution Layer", text: "推进动作、结果回写、复盘沉淀" },
    ],
  },
  capabilities: {
    eyebrow: "Core Modules",
    title: "围绕高频业务推进设计的能力模块",
    items: [
      {
        index: "01",
        title: "Signal Engine",
        text: "把增长波动、异常事件和团队反馈转为高优先级信号，避免真正重要的问题被淹没。",
      },
      {
        index: "02",
        title: "Decision Room",
        text: "让管理者、产品与运营共享同一判断上下文，在统一界面完成取舍、定责与推进。",
      },
      {
        index: "03",
        title: "Execution Graph",
        text: "把动作拆解到团队和节点，实时显示阻塞、依赖与推进状态，减少执行失真。",
      },
      {
        index: "04",
        title: "Learning Loop",
        text: "所有行动结果都会沉淀为下一轮策略参考，让组织真正具备持续进化能力。",
      },
    ],
  },
  useCases: {
    eyebrow: "Use Cases",
    title: "三类最容易失控的业务场景，Rovdex 会把它们重新变得可管理。",
    items: [
      {
        index: "Scenario A",
        title: "增长波动处理",
        text: "当转化率、留存或投放效率出现异常时，团队可以立刻看到相关信号、责任方和正在进行的补救动作。",
        featured: true,
      },
      {
        index: "Scenario B",
        title: "跨部门发布协同",
        text: "发布前后的产品、市场、运营与客户成功不再各自掌握一部分状态，而是在同一面板内协同推进。",
      },
      {
        index: "Scenario C",
        title: "策略复盘与学习",
        text: "每一次动作都附带背景、判断和结果，复盘时看到的是完整链路，而不是零散结论。",
      },
    ],
  },
  playbook: {
    topline: ["Activation Path", "RDX-PLAYBOOK"],
    steps: [
      { index: "1.", text: "Map signals into one operational graph" },
      { index: "2.", text: "Rank decisions by urgency and impact" },
      { index: "3.", text: "Turn plans into accountable execution" },
    ],
    note:
      "这部分借鉴的是低成本理解产品的表达方式，但这里呈现的是 Rovdex 的业务落地路径，而不是开发者工具安装流程。",
  },
  proof: {
    eyebrow: "Proof of Value",
    title: "高级感不该只停留在视觉层，它应该来自结果上的确定性。",
    items: [
      {
        index: "01",
        title: "更快进入真实上下文",
        text: "团队不再需要在报表、聊天记录、任务系统之间来回切换找证据。",
      },
      {
        index: "02",
        title: "更少的对齐成本",
        text: "每个关键动作都附带原因、优先级和责任边界，减少重复沟通与模糊决策。",
      },
      {
        index: "03",
        title: "更强的组织记忆",
        text: "行动结果被结构化记录，不再随着项目结束而消失，下一次决策可以直接复用。",
      },
    ],
  },
  workflow: {
    eyebrow: "Operational Sequence",
    title: "一条更像控制台而不是表格的业务工作流。",
    items: [
      { index: "01", title: "Observe", text: "持续吸收市场、用户、产品与执行信号。" },
      { index: "02", title: "Decode", text: "在上下文中解释变化，不被孤立指标误导。" },
      { index: "03", title: "Command", text: "形成明确动作、顺序与责任链。" },
      { index: "04", title: "Learn", text: "复盘效果并将经验回写成新的组织能力。" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "让访客在离开首页之前，把最关键的疑问先消化掉。",
    items: [
      {
        question: "Rovdex 和 BI 看板有什么本质区别？",
        answer: "BI 看板更擅长展示结果，Rovdex 更强调把结果、原因、责任链和动作推进放进同一工作界面里。",
      },
      {
        question: "它适合哪些团队使用？",
        answer: "适合需要高频判断和跨团队协同的增长、产品、运营、商业化和管理团队。",
      },
      {
        question: "Rovdex 是替代现有工具，还是叠加在它们之上？",
        answer: "更接近一个上层操作界面。它负责汇总信号、统一语境和推动决策，底层依然可以连接已有系统。",
      },
      {
        question: "上线价值主要体现在哪里？",
        answer: "体现在更快识别真正重要的问题、更少的协同摩擦，以及把决策结果沉淀为组织能力。",
      },
    ],
  },
  quote: "“Rovdex 的美感不来自装饰，而来自信息被组织得足够清楚，团队因此能更快做出正确动作。”",
  footer: {
    eyebrow: "Access Rovdex",
    title: "如果你要把这套气质继续往正式品牌官网推进，下一步应该补真实案例、产品截图和转化入口。",
    note: "现在这版已经具备更完整的产品官网节奏：首屏、信任层、场景层、能力层、FAQ 和收口 CTA。",
    actions: [
      { label: "Back to Top", href: "#top", variant: "primary" },
      { label: "Explore System", href: "#system", variant: "secondary" },
    ],
  },
};