import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/en/guide/': [
    {
      text: '介绍',
      children: [
        '/en/guide/README.md',
        '/en/guide/快速入门/快速启动一次代码分析.md'
      ],
    },
    {
      text: '团队管理相关',
      children: [
        '/en/guide/团队管理/团队管理.md',
        '/en/guide/团队管理/成员权限.md',
      ]
    },
    {
      text: '代码检查',
      children: [
        '/en/guide/代码检查/分析结果查看.md',
      ]
    },
    {
      text: '分析方案 & 模板',
      children: [
        '/en/guide/分析方案/基础属性配置.md',
        '/en/guide/分析方案/代码检查配置.md',
        '/en/guide/分析方案/代码检查规则配置.md',
        '/en/guide/分析方案/代码检查编译配置.md',
        '/en/guide/分析方案/代码度量配置.md',
        '/en/guide/分析方案/过滤配置.md',
        '/en/guide/分析方案/分析方案模板说明.md',
      ]
    },
    {
      text: '工具管理',
      children: [
        '/en/guide/工具管理/工具管理说明.md',
        '/en/guide/工具管理/自定义规则.md',
        '/en/guide/工具管理/自定义工具.md',
      ]
    },
    {
      text: '后台管理',
      children: [
        '/en/guide/后台管理/后台管理说明.md',
      ]
    },
    {
      text: '客户端',
      children: [
        '/en/guide/客户端/配置说明.md',
        '/en/guide/客户端/本地分析.md',
        '/en/guide/客户端/常驻节点分析.md',
      ]
    },
    {
      text: '服务端',
      children: [
        '/en/guide/服务端/server.md',
        '/en/guide/服务端/deploy_with_minio.md',
      ]
    },
    {
      text: 'Web端',
      children: [
        '/en/guide/web/web.md',
        '/en/guide/web/deploySource.md',
      ]
    },
  ],
  '/en/advanced/': [
    {
      text: '深入',
      children: [
        '/en/advanced/任务分布式执行.md',
        '/en/advanced/集成代码分析工具.md',
      ],
    }
  ],
  '/en/community/': [
    {
      text: '社区资源',
      children: [
        '/en/community/contribute.md',
        '/en/community/pr.md',
        '/en/community/changelog.md',
        '/en/community/joingroup.md',
      ]
    },
  ],
  '/en/api/': [
    {
      text: 'API',
      children: [
        '/en/api/README.md',
        '/en/api/对象主要字段说明.md',
        '/en/api/项目管理模块接口.md',
        '/en/api/任务管理模块接口.md',
        '/en/api/结果概览模块接口.md',
        '/en/api/代码扫描数据模块接口.md',
        '/en/api/代码度量数据模块接口.md',
      ]
    },
  ],
  '/en/quickStarted/': [
    {
      text: '快速入门',
      children: [
        {
          text: '概述',
          link: '/en/quickStarted/intro.md',
        },
        '/en/quickStarted/deploySever.md',
        '/en/quickStarted/initRepo.md',
        '/en/quickStarted/deployClient.md',
        '/en/quickStarted/runProject.md',
        '/en/quickStarted/FAQ.md',
      ],
    },
    {
      text: '依赖安装参考',
      // collapsible: true,
      children: [
        '/en/quickStarted/references/install_python37_on_centos.md',
        '/en/quickStarted/references/install_python37_on_ubuntu.md',
        '/en/quickStarted/references/install_mysql_on_centos.md',
        '/en/quickStarted/references/install_nginx_from_source.md',
        '/en/quickStarted/references/install_redis_from_source.md',
        '/en/quickStarted/references/install_redis_on_centos.md',
      ],
    },
    {
      text: '其他',
      // collapsible: true,
      children: [
        '/en/quickStarted/tools.md',
      ],
    },
  ],
}