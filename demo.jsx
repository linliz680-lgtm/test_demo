import React, { useState } from 'react';
import { 
  Menu, 
  ChevronDown, 
  HelpCircle, 
  LogOut, 
  LayoutGrid, 
  FileCode2, 
  Workflow, 
  FileText, 
  Database, 
  TestTubes, 
  FileArchive, 
  Settings,
  Edit3,
  Check,
  Plus,
  ChevronRight,
  Bot,
  Sparkles,
  Send,
  FileJson
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('response');

  // 模拟表格数据
  const tableData = [
    { name: 'batchChgSubStatus', desc: 'Batch Change Subscriber Status', createTime: '2026-03-10 11:10:00', updateTime: '2026-03-10 11:10:00' },
    { name: 'getBatchOperation', desc: 'query the execution result of the batch order.', createTime: '2026-03-10 11:10:00', updateTime: '2026-03-10 11:10:00' },
    { name: 'batchChgSubSupOfferings', desc: "change subscribers' supplementary offerings in batch", createTime: '2026-03-10 11:10:00', updateTime: '2026-03-10 11:10:00' },
    { name: 'queryBatchOrders', desc: 'This API is used to query the batch orders.', createTime: '2026-03-10 11:10:00', updateTime: '2026-03-10 11:10:00' },
    { name: 'batchManageGroupMember', desc: 'This API is used to manage group members in batch.', createTime: '2026-03-10 11:10:00', updateTime: '2026-03-10 11:10:00' },
    { name: 'batchBindIMEI', desc: 'This method is used to bind IMEI in batch.', createTime: '2026-03-18 11:36:00', updateTime: '2026-03-18 11:36:00' },
  ];

  // 请求参数数据 (清除了之前的高亮)
  const requestParamData = [
    { id: 1, level: 0, hasChildren: true, expanded: true, name: '', type: 'BatchBindIMEIReqMsg', length: '', required: '', isArray: '', desc: '' },
    { id: 2, level: 1, hasChildren: true, expanded: false, name: 'requestHeader', type: 'RequestHeader', length: '', required: 'true', isArray: 'false', desc: 'Request header definition. BusinessCode: ChangeNetworkSetting.' },
    { id: 7, level: 1, hasChildren: true, expanded: false, name: 'orderInfo', type: 'OrderInfo', length: '', required: 'false', isArray: 'false', desc: '订单信息' },
    { id: 3, level: 1, hasChildren: true, expanded: true, name: 'custAccessCode', type: 'CustAccessCode', length: '', required: 'false', isArray: 'false', desc: '客户标识。此类型必须设置custId或custCode中的一项。' },
    { id: 31, level: 2, hasChildren: false, expanded: false, name: 'custId', type: 'string', length: '64', required: 'false', isArray: 'false', desc: '客户ID' },
    { id: 32, level: 2, hasChildren: false, expanded: false, name: 'custCode', type: 'string', length: '64', required: 'false', isArray: 'false', desc: '客户编码' },
    { id: 5, level: 1, hasChildren: true, expanded: false, name: 'bindImeiInfo', type: 'BindImeiInfo', length: '', required: 'true', isArray: 'false', desc: 'Bind IMEI information.' },
    { id: 6, level: 1, hasChildren: false, expanded: false, name: 'fileName', type: 'string', length: '128', required: 'true', isArray: 'false', desc: '可以通过文件来配置批量的请求参数' },
  ];

  // 响应参数数据 (根据用户的最新输入重新配置了响应参数)
  const responseParamData = [
    { id: 11, level: 0, hasChildren: true, expanded: true, name: '', type: 'BatchBindIMEIRspMsg', length: '', required: '', isArray: '', desc: '' },
    { id: 12, level: 1, hasChildren: false, expanded: false, name: 'resultHeader', type: 'ResultHeader', length: '', required: 'true', isArray: 'false', desc: '', isNew: true },
    { id: 13, level: 1, hasChildren: false, expanded: false, name: 'batchTransactionID', type: 'string', length: '20', required: 'false', isArray: 'false', desc: '', isNew: true },
    { id: 14, level: 1, hasChildren: false, expanded: false, name: 'orderId', type: 'decimal', length: '20', required: 'false', isArray: 'false', desc: '表示创建的order id', isNew: true },
  ];

  const currentParamData = activeTab === 'request' ? requestParamData : responseParamData;

  return (
    <div className="flex flex-col h-screen w-full bg-white font-sans text-sm text-[#333]">
      {/* 顶部导航栏 */}
      <header className="h-14 border-b border-gray-100 flex items-center justify-between px-4 shrink-0 shadow-sm z-10">
        <div className="flex items-center space-x-6">
          {/* Logo 区域 */}
          <div className="flex items-center space-x-2">
            <div className="flex relative w-6 h-6 items-center justify-center">
              <div className="absolute w-4 h-4 rounded-full bg-orange-500 left-0 top-1 opacity-90"></div>
              <div className="absolute w-4 h-4 rounded-full bg-blue-500 right-0 bottom-1 opacity-90 mix-blend-multiply"></div>
            </div>
            <span className="font-bold text-base tracking-wide">IF统一管理平台</span>
          </div>

          <Menu className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />

          {/* 环境选择器 */}
          <div className="flex items-center space-x-1 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md cursor-pointer hover:bg-gray-100 text-xs text-gray-600">
            <span>存量版本 / A2_MTNI</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-4 text-gray-500 text-xs">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500 transition-colors">
            <span>帮助</span>
          </div>
          <LogOut className="w-4 h-4 cursor-pointer hover:text-blue-500 transition-colors" />
        </div>
      </header>

      {/* 主体内容区 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 左侧边栏 */}
        <aside className="w-60 border-r border-gray-100 bg-white flex flex-col py-4 overflow-y-auto shrink-0">
          <nav className="flex-1">
            <ul className="space-y-1">
              {/* 展开的菜单组 */}
              <li>
                <div className="flex items-center px-4 py-2 cursor-pointer text-gray-700 hover:text-blue-500 group">
                  <LayoutGrid className="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-500" />
                  <span className="flex-1 font-medium">接口开发</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                <ul className="mt-1">
                  <li className="pl-11 pr-4 py-2 bg-blue-50 text-blue-600 cursor-pointer border-r-2 border-blue-500">
                    API协议管理
                  </li>
                  <li className="pl-11 pr-4 py-2 text-gray-600 hover:text-blue-500 cursor-pointer">
                    流程管理
                  </li>
                  <li className="pl-11 pr-4 py-2 text-gray-600 hover:text-blue-500 cursor-pointer">
                    协议生成管理
                  </li>
                  <li className="pl-11 pr-4 py-2 text-gray-600 hover:text-blue-500 cursor-pointer">
                    协议转换管理
                  </li>
                </ul>
              </li>

              {/* 收起的菜单组 */}
              {[
                { icon: Database, label: '数据视图' },
                { icon: TestTubes, label: '接口测试' },
                { icon: FileArchive, label: '接口归档' },
                { icon: Settings, label: '系统管理' },
              ].map((item, index) => (
                <li key={index}>
                  <div className="flex items-center px-4 py-2.5 cursor-pointer text-gray-700 hover:text-blue-500 hover:bg-gray-50 group">
                    <item.icon className="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-500" />
                    <span className="flex-1">{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 opacity-50" />
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* 右侧主内容区 */}
        <main className="flex-1 flex flex-col overflow-auto bg-white relative">
          <div className="p-6 pb-20 max-w-7xl">
            {/* 面包屑 */}
            <div className="flex items-center text-xs text-gray-400 mb-6">
              <span className="cursor-pointer hover:text-gray-600">首页</span>
              <span className="mx-2">&gt;</span>
              <span className="cursor-pointer hover:text-gray-600">接口开发</span>
              <span className="mx-2">&gt;</span>
              <span className="text-gray-600">API协议管理</span>
            </div>

            {/* 页面标题 & 顶部操作 */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-800 mr-2">CRMInterface_BatchBusiness_Services</h1>
                <Edit3 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500" />
              </div>
              <button className="px-4 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:border-gray-400 hover:text-gray-800 bg-white shadow-sm transition-colors">
                返回
              </button>
            </div>

            {/* 信息卡片区 */}
            <div className="bg-[#fcfcfd] border border-gray-100 rounded-lg p-6 mb-8 relative">
              {/* 右上角水印占位 */}
              <div className="absolute top-4 right-4 text-red-100 opacity-50 select-none">
                <div className="w-12 h-6 border-2 border-red-100 rounded text-center leading-5 text-xs transform -rotate-12">秘</div>
              </div>

              <div className="grid grid-cols-4 gap-8">
                {/* 第一列 */}
                <div className="space-y-6">
                  <div>
                    <div className="text-gray-400 text-xs mb-1.5">协议</div>
                    <div className="text-gray-800">soap</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-1.5">描述</div>
                    <div className="text-gray-500">空</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-1.5">根路径</div>
                    <div className="text-gray-500">空</div>
                  </div>
                </div>

                {/* 第二列 */}
                <div>
                  <div className="text-gray-400 text-xs mb-1.5">创建人</div>
                  <div className="text-gray-800 flex items-center">
                    <span className="blur-sm bg-gray-200 text-transparent select-none">某某某某某某</span>
                  </div>
                </div>

                {/* 第三列 */}
                <div>
                  <div className="text-gray-400 text-xs mb-1.5">创建时间</div>
                  <div className="text-gray-800">2026-03-10 11:10:00</div>
                </div>

                {/* 第四列 */}
                <div>
                  <div className="text-gray-400 text-xs mb-1.5">最后修改时间</div>
                  <div className="text-gray-800">2026-03-10 11:10:00</div>
                </div>
              </div>
            </div>

            {/* 方法列表区 */}
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                <h2 className="text-base font-bold text-gray-800">方法列表</h2>
                <div className="flex space-x-2">
                  <button className="flex items-center px-4 py-1.5 bg-[#1890ff] hover:bg-[#40a9ff] text-white rounded text-xs transition-colors shadow-sm">
                    <Check className="w-3 h-3 mr-1" />
                    保存
                  </button>
                  <button className="flex items-center px-4 py-1.5 bg-[#1890ff] hover:bg-[#40a9ff] text-white rounded text-xs transition-colors shadow-sm">
                    <Plus className="w-3 h-3 mr-1" />
                    新增
                  </button>
                </div>
              </div>

              {/* 表格 */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-[#fafafa] border-y border-gray-100">
                      <th className="py-3 px-4 font-normal text-gray-500 w-[20%]">方法名称</th>
                      <th className="py-3 px-4 font-normal text-gray-500 w-[40%]">方法描述</th>
                      <th className="py-3 px-4 font-normal text-gray-500 w-[15%]">
                        <div className="flex items-center cursor-pointer hover:text-gray-700">
                          创建时间
                          <div className="ml-1 flex flex-col">
                            <svg className="w-2 h-2 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"></path></svg>
                            <svg className="w-2 h-2 text-gray-300 -mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"></path></svg>
                          </div>
                        </div>
                      </th>
                      <th className="py-3 px-4 font-normal text-gray-500 w-[15%]">
                        <div className="flex items-center cursor-pointer hover:text-gray-700">
                          修改时间
                          <div className="ml-1 flex flex-col">
                            <svg className="w-2 h-2 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"></path></svg>
                            <svg className="w-2 h-2 text-gray-300 -mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"></path></svg>
                          </div>
                        </div>
                      </th>
                      <th className="py-3 px-4 font-normal text-gray-500 w-[10%]">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => {
                      const isNew = row.name === 'batchBindIMEI';
                      return (
                      <tr 
                        key={index} 
                        className={`transition-colors ${
                          index === 0 ? 'bg-[#e6f4ff] hover:bg-[#e6f4ff] border-b border-gray-100' : 
                          isNew ? 'bg-green-50 hover:bg-green-100 outline outline-2 outline-green-500 relative z-10 shadow-sm' : 'border-b border-gray-100 hover:bg-gray-50'
                        }`}
                      >
                        <td className="py-3.5 px-4 relative">
                          {/* 第一行的蓝色左边框高亮 */}
                          {index === 0 && (
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#1890ff]"></div>
                          )}
                          <div className="flex items-center">
                            <span className={index === 0 ? 'text-[#1890ff]' : isNew ? 'text-green-700 font-bold' : 'text-gray-700'}>
                              {row.name}
                            </span>
                            {/* 新增方法的 Tag 标识 */}
                            {isNew && (
                              <span className="ml-2 px-1.5 py-0.5 bg-green-500 text-white text-[10px] rounded font-medium shadow-sm flex items-center">
                                <Sparkles className="w-2.5 h-2.5 mr-0.5" />
                                新增
                              </span>
                            )}
                          </div>
                        </td>
                        <td className={`py-3.5 px-4 ${isNew ? 'text-green-700 font-medium' : 'text-gray-600'}`}>{row.desc}</td>
                        <td className={`py-3.5 px-4 ${isNew ? 'text-green-700' : 'text-gray-600'}`}>{row.createTime}</td>
                        <td className={`py-3.5 px-4 ${isNew ? 'text-green-700' : 'text-gray-600'}`}>{row.updateTime}</td>
                        <td className="py-3.5 px-4">
                          <div className={`flex space-x-3 ${isNew ? 'text-green-600' : 'text-[#1890ff]'}`}>
                            <button className={`hover:${isNew ? 'text-green-800' : 'text-blue-700'}`}>删除</button>
                            <button className={`hover:${isNew ? 'text-green-800' : 'text-blue-700'}`}>测试</button>
                          </div>
                        </td>
                      </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 参数列表区 */}
            <div className="mt-8">
              {/* 标签栏 & 操作 */}
              <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                <div className="flex space-x-6 text-sm">
                  <div 
                    className={`cursor-pointer pb-2 -mb-[14px] border-b-2 transition-colors ${activeTab === 'request' ? 'font-bold text-gray-800 border-[#1890ff]' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
                    onClick={() => setActiveTab('request')}
                  >
                    请求参数
                  </div>
                  <div 
                    className={`cursor-pointer pb-2 -mb-[14px] border-b-2 transition-colors ${activeTab === 'response' ? 'font-bold text-gray-800 border-[#1890ff]' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
                    onClick={() => setActiveTab('response')}
                  >
                    响应参数
                  </div>
                </div>
                <button className="flex items-center px-4 py-1.5 bg-[#1890ff] hover:bg-[#40a9ff] text-white rounded text-xs transition-colors shadow-sm">
                  <Plus className="w-3 h-3 mr-1" />
                  插入同级属性
                </button>
              </div>

              {/* 参数树形表格 */}
              <div className="overflow-x-auto border border-gray-100 rounded">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-[#fafafa] border-b border-gray-100">
                      <th className="py-3 px-4 font-normal text-gray-500 w-[22%]">属性名称</th>
                      <th className="py-3 px-4 font-normal text-gray-500 w-[22%]">数据类型</th>
                      <th className="py-3 px-4 font-normal text-gray-500 w-[8%]">长度</th>
                      <th className="py-3 px-4 font-normal text-gray-500 w-[8%]">是否必填</th>
                      <th className="py-3 px-4 font-normal text-gray-500 w-[8%]">是否数组</th>
                      <th className="py-3 px-4 font-normal text-gray-500 w-[17%]">描述</th>
                      <th className="py-3 px-4 font-normal text-gray-500 w-[15%]">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentParamData.map((row, index) => (
                      <tr
                        key={row.id}
                        className={`transition-colors relative ${
                          index === 0 ? 'bg-[#e6f4ff] hover:bg-[#e6f4ff] border-b border-blue-100' : 
                          row.isNew ? 'bg-green-50 hover:bg-green-100 border-b border-green-100 z-10' : 'border-b border-gray-50 hover:bg-gray-50'
                        }`}
                      >
                        <td className="py-3 px-4 relative">
                          {/* 第一行的蓝色左边框高亮 */}
                          {index === 0 && (
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#1890ff]"></div>
                          )}
                          {/* 新增属性的绿色左边框 */}
                          {row.isNew && (
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-green-500"></div>
                          )}
                          <div className="flex items-center" style={{ paddingLeft: `${row.level * 24}px` }}>
                            {row.hasChildren ? (
                              row.expanded ? (
                                <ChevronDown className={`w-3.5 h-3.5 ${row.isNew ? 'text-green-500' : 'text-gray-400'} cursor-pointer mr-2 shrink-0`} />
                              ) : (
                                <ChevronRight className={`w-3.5 h-3.5 ${row.isNew ? 'text-green-500' : 'text-gray-400'} cursor-pointer mr-2 shrink-0`} />
                              )
                            ) : (
                              <div className="w-5 mr-2 shrink-0"></div> // 无子节点时的占位，保持对齐
                            )}
                            <span className={row.isNew ? 'text-green-700 font-medium' : 'text-gray-700'}>{row.name}</span>
                            {row.isNew && (
                              <span className="ml-2 px-1.5 py-0.5 bg-green-500 text-white text-[9px] rounded font-medium shadow-sm flex items-center">
                                <Sparkles className="w-2.5 h-2.5 mr-0.5" />
                                AI生成
                              </span>
                            )}
                          </div>
                        </td>
                        <td className={`py-3 px-4 ${row.isNew ? 'text-green-700' : 'text-gray-700'}`}>{row.type}</td>
                        <td className={`py-3 px-4 ${row.isNew ? 'text-green-600' : 'text-gray-600'}`}>{row.length}</td>
                        <td className={`py-3 px-4 ${row.isNew ? 'text-green-600' : 'text-gray-600'}`}>{row.required}</td>
                        <td className={`py-3 px-4 ${row.isNew ? 'text-green-600' : 'text-gray-600'}`}>{row.isArray}</td>
                        <td className={`py-3 px-4 ${row.isNew ? 'text-green-600' : 'text-gray-600'}`}>{row.desc}</td>
                        <td className="py-3 px-4">
                          <div className={`flex space-x-3 ${row.isNew ? 'text-green-600' : 'text-[#1890ff]'}`}>
                            <button className={`hover:${row.isNew ? 'text-green-800' : 'text-blue-700'}`}>新增子级</button>
                            <button className={`hover:${row.isNew ? 'text-green-800' : 'text-blue-700'}`}>删除</button>
                            <button className={`hover:${row.isNew ? 'text-green-800' : 'text-blue-700'}`}>转换</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        </main>

        {/* AI Copilot 右侧面板 */}
        <aside className="w-80 border-l border-gray-200 bg-[#f9fafb] flex flex-col shrink-0 z-10 shadow-[-4px_0_10px_rgba(0,0,0,0.02)]">
          {/* 标题栏 */}
          <div className="h-14 border-b border-gray-200 flex items-center justify-between px-4 bg-white shrink-0">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-gray-800 text-sm">AI Copilot</span>
            </div>
          </div>
          
          {/* 聊天内容区 */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs">
            {/* AI 消息 */}
            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 shadow-sm text-gray-700 leading-relaxed">
                你好！我是你的 AI 助手。我可以帮你生成接口文档、测试用例，或者解答关于 <span className="text-blue-600 font-medium">CRMInterface_BatchBusiness_Services</span> 的问题。
              </div>
            </div>
            
            {/* 用户消息 */}
            <div className="flex items-start space-x-2 flex-row-reverse space-x-reverse">
              <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                <span className="text-orange-600 text-xs font-bold">我</span>
              </div>
              <div className="bg-blue-500 text-white rounded-lg rounded-tr-none p-3 shadow-sm leading-relaxed">
                增加一个方法，用来批量绑定IMEI
              </div>
            </div>

            {/* AI 消息 - 推荐方法名 */}
            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 shadow-sm text-gray-700 leading-relaxed w-full">
                <p>好的，针对“批量绑定IMEI”的需求，我为你推荐以下几个方法名：</p>
                
                <div className="flex flex-col space-y-2 mt-3 mb-2">
                  <button className="text-left px-3 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 border border-blue-100 transition-colors flex items-center justify-between group">
                    <span className="font-mono font-medium">batchBindIMEI</span>
                    <Plus className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button className="text-left px-3 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 border border-blue-100 transition-colors flex items-center justify-between group">
                    <span className="font-mono font-medium">bindDeviceInBatch</span>
                    <Plus className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button className="text-left px-3 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 border border-blue-100 transition-colors flex items-center justify-between group">
                    <span className="font-mono font-medium">manageBatchIMEIBinding</span>
                    <Plus className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>

                <div className="pt-2 mt-2 border-t border-gray-100 text-gray-500">
                  你可以点击上方推荐直接应用，或者在下方输入框告诉我你指定的方法名。
                </div>
              </div>
            </div>

            {/* 用户消息 - 选择推荐方法 */}
            <div className="flex items-start space-x-2 flex-row-reverse space-x-reverse">
              <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                <span className="text-orange-600 text-xs font-bold">我</span>
              </div>
              <div className="bg-blue-500 text-white rounded-lg rounded-tr-none p-3 shadow-sm leading-relaxed">
                选择：batchBindIMEI
              </div>
            </div>

            {/* AI 消息 - 确认添加并提示下一步 */}
            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 shadow-sm text-gray-700 leading-relaxed w-full">
                {/* 成功提示 */}
                <div className="flex items-center text-green-600 mb-3 pb-2 border-b border-gray-100">
                  <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-1.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span>已成功添加方法 <strong className="font-mono text-gray-800 ml-0.5">batchBindIMEI</strong></span>
                </div>
                
                {/* 发现关联服务卡片 */}
                <div className="bg-[#f0f7ff] border border-[#d6e4ff] rounded-md p-2.5 mb-3 relative overflow-hidden">
                  <div className="absolute -right-2 -top-2 opacity-10">
                    <Database className="w-12 h-12 text-blue-500" />
                  </div>
                  <div className="flex items-start relative z-10">
                    <Sparkles className="w-3.5 h-3.5 text-blue-500 mt-0.5 mr-1.5 shrink-0" />
                    <div className="flex-1">
                      <span className="text-blue-800 font-medium mb-1.5 block">发现智能关联服务</span>
                      <div className="space-y-1.5">
                        <div className="flex items-baseline text-[11px]">
                          <span className="text-blue-400/80 w-12 shrink-0">接口包</span>
                          <span className="font-mono text-blue-700 bg-white px-1.5 py-0.5 rounded shadow-sm border border-blue-50 break-all">CRMInterface_Business_Service</span>
                        </div>
                        <div className="flex items-baseline text-[11px]">
                          <span className="text-blue-400/80 w-12 shrink-0">方法名</span>
                          <span className="font-mono text-blue-700 bg-white px-1.5 py-0.5 rounded shadow-sm border border-blue-50 break-all">BindImei</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 询问操作 */}
                <p className="mb-3 text-gray-600">是否依据此服务生成<span className="font-medium text-gray-800 mx-1">请求参数</span>和<span className="font-medium text-gray-800 mx-1">响应参数</span>结构？</p>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1.5 px-2 rounded-md transition-colors text-center font-medium shadow-sm flex items-center justify-center group">
                    <Check className="w-3.5 h-3.5 mr-1 group-hover:scale-110 transition-transform" />
                    生成参数
                  </button>
                  <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-600 hover:text-gray-800 py-1.5 px-2 rounded-md transition-colors text-center shadow-sm">
                    重新指定
                  </button>
                </div>
              </div>
            </div>

            {/* 用户消息 - 触发生成参数 */}
            <div className="flex items-start space-x-2 flex-row-reverse space-x-reverse">
              <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                <span className="text-orange-600 text-xs font-bold">我</span>
              </div>
              <div className="bg-blue-500 text-white rounded-lg rounded-tr-none p-3 shadow-sm leading-relaxed">
                生成参数
              </div>
            </div>

            {/* AI 消息 - 生成完成反馈 */}
            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 shadow-sm text-gray-700 leading-relaxed w-full">
                <div className="flex flex-col items-center justify-center py-2 mb-2 border-b border-gray-100">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-2">
                    <FileJson className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="font-medium text-gray-800">参数解析与生成成功</span>
                </div>
                <p className="text-gray-600 mb-2">已根据 <span className="font-mono text-blue-600">BindImei</span> 的定义，成功提取了以下属性并填入左侧表格：</p>
                <ul className="list-disc pl-4 space-y-1 text-[11px] text-gray-500 mb-3 font-mono">
                  <li>requestHeader <span className="text-gray-400">(M)</span></li>
                  <li>subscriberId <span className="text-gray-400">(M)</span></li>
                  <li>serviceNumber <span className="text-gray-400">(O)</span></li>
                  <li>bindImeiInfo <span className="text-gray-400">(M)</span></li>
                </ul>
                <p className="text-gray-600">请在左侧主界面的<strong className="text-gray-800 mx-1">请求参数</strong>页签中查看和微调。</p>
              </div>
            </div>

            {/* 用户消息 - 新增fileName参数 */}
            <div className="flex items-start space-x-2 flex-row-reverse space-x-reverse">
              <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                <span className="text-orange-600 text-xs font-bold">我</span>
              </div>
              <div className="bg-blue-500 text-white rounded-lg rounded-tr-none p-3 shadow-sm leading-relaxed">
                加一个文件名的参数，表示可以通过文件来配置批量的请求参数，此参数必填，数据类型为string，最长长度128
              </div>
            </div>

            {/* AI 消息 - 确认添加参数 */}
            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 shadow-sm text-gray-700 leading-relaxed w-full">
                好的，已为你将 <span className="font-mono font-medium text-blue-600">fileName</span> 参数添加到左侧的“请求参数”列表中。
                <br /><br />
                参数详情如下：
                <ul className="list-disc pl-4 mt-1 space-y-1 text-gray-600">
                  <li>类型：string</li>
                  <li>长度：128</li>
                  <li>必填：true</li>
                </ul>
              </div>
            </div>

            {/* 用户消息 - 修改subscriberId参数 */}
            <div className="flex items-start space-x-2 flex-row-reverse space-x-reverse">
              <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                <span className="text-orange-600 text-xs font-bold">我</span>
              </div>
              <div className="bg-blue-500 text-white rounded-lg rounded-tr-none p-3 shadow-sm leading-relaxed">
                修改subscriberId为custAccessCode，表示客户标识，数据类型为CustAccessCode，可选参数，此类型必须设置custId或custCode中的一项。
              </div>
            </div>

            {/* AI 消息 - 确认修改参数 */}
            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 shadow-sm text-gray-700 leading-relaxed w-full">
                好的，已为你将 <span className="font-mono text-gray-400 line-through mr-1">subscriberId</span>
                修改为 <span className="font-mono font-medium text-blue-600">custAccessCode</span>。
                <br /><br />
                参数详情已更新：
                <ul className="list-disc pl-4 mt-1 space-y-1 text-gray-600">
                  <li>类型变更为：<span className="font-mono text-gray-800">CustAccessCode</span></li>
                  <li>必填状态变更为：<span className="text-orange-500 font-medium">false</span> (可选)</li>
                  <li>根据类型特性，已自动为你展开并补充了 <span className="font-mono text-blue-600">custId</span> 和 <span className="font-mono text-blue-600">custCode</span> 两个子节点。</li>
                </ul>
              </div>
            </div>

            {/* 用户消息 - 删除serviceNumber参数 */}
            <div className="flex items-start space-x-2 flex-row-reverse space-x-reverse">
              <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                <span className="text-orange-600 text-xs font-bold">我</span>
              </div>
              <div className="bg-blue-500 text-white rounded-lg rounded-tr-none p-3 shadow-sm leading-relaxed">
                去掉serviceNumber参数
              </div>
            </div>

            {/* AI 消息 - 确认删除参数 */}
            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 shadow-sm text-gray-700 leading-relaxed w-full">
                好的，已为你从左侧的“请求参数”列表中移除了 <span className="font-mono text-gray-500 line-through">serviceNumber</span> 参数。
              </div>
            </div>

            {/* 用户消息 - 增加orderInfo参数 */}
            <div className="flex items-start space-x-2 flex-row-reverse space-x-reverse">
              <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                <span className="text-orange-600 text-xs font-bold">我</span>
              </div>
              <div className="bg-blue-500 text-white rounded-lg rounded-tr-none p-3 shadow-sm leading-relaxed">
                增加可选参数orderInfo
              </div>
            </div>

            {/* AI 消息 - 确认添加orderInfo参数 */}
            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 shadow-sm text-gray-700 leading-relaxed w-full">
                好的，已为你将 <span className="font-mono font-medium text-blue-600">orderInfo</span> 参数添加到左侧的“请求参数”列表中。
                <br /><br />
                参数详情如下：
                <ul className="list-disc pl-4 mt-1 space-y-1 text-gray-600">
                  <li>类型：<span className="font-mono text-gray-800">OrderInfo</span></li>
                  <li>必填：<span className="text-orange-500 font-medium">false</span> (可选)</li>
                </ul>
              </div>
            </div>

            {/* 用户消息 - 请求生成响应参数 */}
            <div className="flex items-start space-x-2 flex-row-reverse space-x-reverse">
              <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                <span className="text-orange-600 text-xs font-bold">我</span>
              </div>
              <div className="bg-blue-500 text-white rounded-lg rounded-tr-none p-3 shadow-sm leading-relaxed">
                bindimei接口的响应参数是这个格式，请体现在左侧表格里
              </div>
            </div>

            {/* AI 消息 - 响应参数生成完成反馈 */}
            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 shadow-sm text-gray-700 leading-relaxed w-full">
                <div className="flex flex-col items-center justify-center py-2 mb-2 border-b border-gray-100">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-2">
                    <FileJson className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="font-medium text-gray-800">响应参数解析与生成成功</span>
                </div>
                <p className="text-gray-600 mb-2">已根据你提供的图片，提取了以下响应属性并更新到左侧表格：</p>
                <ul className="list-disc pl-4 space-y-1 text-[11px] text-gray-500 mb-3 font-mono">
                  <li>response <span className="text-gray-400">(M, CreateOrderResponse)</span></li>
                  <li>additionalProperty <span className="text-gray-400">(O, list[SimpleProperty])</span></li>
                </ul>
                <p className="text-gray-600">我已自动为你切换到<strong className="text-gray-800 mx-1">响应参数</strong>页签，请查看。</p>
              </div>
            </div>

            {/* 用户消息 - 修改响应参数 */}
            <div className="flex items-start space-x-2 flex-row-reverse space-x-reverse">
              <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                <span className="text-orange-600 text-xs font-bold">我</span>
              </div>
              <div className="bg-blue-500 text-white rounded-lg rounded-tr-none p-3 shadow-sm leading-relaxed">
                响应参数为resultHeader、 batchTransactionID、orderId，batchTransactionID是长度为20的字符串，可选的参数，orderId为20位长度的数字，也是可选的参数，表示创建的order id
              </div>
            </div>

            {/* AI 消息 - 确认响应参数更新 */}
            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 shadow-sm text-gray-700 leading-relaxed w-full">
                好的，已为你重新配置了左侧的“响应参数”列表。
                <br /><br />
                更新后的参数详情如下：
                <ul className="list-disc pl-4 mt-1 space-y-1 text-gray-600">
                  <li><span className="font-mono text-blue-600">resultHeader</span></li>
                  <li><span className="font-mono text-blue-600">batchTransactionID</span>：string类型，长度20，<span className="text-orange-500">可选</span></li>
                  <li><span className="font-mono text-blue-600">orderId</span>：decimal类型，长度20，<span className="text-orange-500">可选</span>，描述为“表示创建的order id”</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* 输入区域 */}
          <div className="p-3 bg-white border-t border-gray-200 shrink-0">
            <div className="relative flex items-end border border-gray-300 rounded-lg bg-gray-50 focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all shadow-sm">
              <textarea 
                className="w-full bg-transparent max-h-32 min-h-[44px] p-3 text-xs outline-none resize-none text-gray-700"
                placeholder="输入你的问题，按 Enter 发送..."
                rows={1}
              />
              <button className="p-2 m-1.5 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors shrink-0 shadow-sm flex items-center justify-center">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="text-[10px] text-gray-400 mt-2.5 text-center flex justify-center items-center">
              AI 生成的内容可能存在不准确性，请注意甄别。
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default App;
