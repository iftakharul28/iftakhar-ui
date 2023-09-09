# @iftakhar/ui

## Install

```js
yarn add @iftakhar/ui
```

```js
npm i @iftakhar/ui
```

## Components

- Accordion
- Button
- Condition
- Input
- List
- Model
- Select
- Sidebar
- Pagination
- Tab
- Table
- Timeline (not stable)
- Toast (not stable)
- Tooltip (not stable)

## Development

Want to contribute? Great!

Accordion:

```js
<Accordion defaultValue='item-1' className='max-w-[500px] w-full mx-auto p-10'>
  <Accordion.Item className='cursor-pointer' value='item-1'>
    <Accordion.Trigger value='item-1' activeClass='border-b-0' className='border-b py-4 font-semibold w-full flex items-center justify-between'>
      <h2>Is it accessible?</h2>
    </Accordion.Trigger>
    <Accordion.Content value='item-1'>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item className='cursor-pointer' value='item-2'>
    <Accordion.Trigger value='item-2' activeClass='border-b-0' className='border-b py-4 font-semibold w-full flex items-center justify-between'>
      <h2>Is it unstyled?</h2>
    </Accordion.Trigger>
    <Accordion.Content value='item-2'>Yes. It comes with default styles that matches the other</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

Button:

```js
<Button className='text-red-400' type='link' href="/home">
	Go Home
</Button>
<Button className='text-red-400' type='button' onClick={() =>  console.log("hi"}>
	Click Here
</Button>
```

Condition:

```js
<Switch>
  <Switch.Case condition={true}>
    <span>new Order</span>
  </Switch.Case>
  <Switch.Case condition={false}>
    <span>Pre Order</span>
  </Switch.Case>
  <Switch.Default>
    <span>Pre Order</span>
  </Switch.Default>
</Switch>
```

Input:

```js
<Label htmlFor="password" className='auth-input-label'>
	Password
</Label>
<Input type='email' id='loginEmail' placeholder='Email address' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='email' />
<TextArea id='textarea' className='h-20 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' />
```

List:

```js
<List
  data={accordionData}
  renderItem={(item) => (
    <div>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
    </div>
  )}
/>
```

Model:

```js
<Modal
  title={'Modal'}
  visible={isActive}
  maskClosable={false}
  okButton={{ onClick: () => setActive(!isActive), type: 'button', className: 'ok btn', children: 'OK' }}
  cancelButton={{ onClick: () => setActive(!isActive), type: 'button', className: 'ok btn', children: 'Close' }}
  className='!max-w-xl mx-auto !top-40'>
  <div>Just do not learn physics at school and your life will be full of magic and miracles. Day before yesterday I saw a rabbit, and yesterday a deer, and today, you.</div>
</Modal>
```

Select:

```js
<Select value={selectedOption} onChange={handleSelectChange}>
  <Select.Option value='option-1'>Option 1</Select.Option>
  <Select.Option value='option-2'>Option 2</Select.Option>
  <Select.Option value='option-3'>Option 3</Select.Option>
</Select>
```

Sidebar:

```js
<Sidebar className='mt-20' breakPoint='md' collapsed={collapsedSidebar} toggled={toggleSidebar} onToggle={(toggle) => setToggleSidebar(toggle)}>
  <Sidebar.Header className='py-2 flex justify-center'>
    <img src={'/favicon.ico'} alt='applegadgets' className='w-10' />
  </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Menu iconShape='round'>
      <Sidebar.MenuItem icon={<Blocks />}>Dashboard</Sidebar.MenuItem>
      <Sidebar.SubMenu title={'Order Manage'} icon={<Store />}>
        <Sidebar.MenuItem>Add New Order</Sidebar.MenuItem>
        <Sidebar.MenuItem>Order List</Sidebar.MenuItem>
      </Sidebar.SubMenu>
    </Sidebar.Menu>
  </Sidebar.Content>
  <Sidebar.Footer className=' flex justify-center py-2'>
    <button onClick={() => setCollapsedSidebar(!collapsedSidebar)} className={Clsx('h-10 w-10 text-xl center-inner hover:text-primary hover:text-2xl duration-300')}>
      <ArrowDown className=' rotate-90' />
    </button>
  </Sidebar.Footer>
</Sidebar>
```

Pagination

```js
<Pagination current={1} pageSize={20} total={30} onChange={handlePageChange} />
```

Tab

```js
<Tabs className='w-[500px] mx-auto' defaultValue='item-1'>
  <Tabs.List className='h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2' ariaLabel='Manage your account'>
    <Tabs.Trigger
      className='whitespace-nowrap rounded-sm px-3 py-1.5 text-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2'
      activeClass='bg-slate-700 text-white'
      value='item-1'>
      Account
    </Tabs.Trigger>
    <Tabs.Trigger
      className='whitespace-nowrap rounded-sm px-3 py-1.5 text-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2'
      activeClass='bg-slate-700 text-white'
      value='item-2'>
      Password
    </Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content className='mt-3 rounded border border-gray-400 px-4 py-3 space-y-2' value='item-1'>
    <div>
      <label htmlFor='loginName' className='auth-input-label'>
        Name
      </label>
      <Input type='email' id='loginName' placeholder='Name' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='name' />
    </div>
    <div>
      <label htmlFor='loginEmail' className='auth-input-label'>
        Email
      </label>
      <Input type='email' id='loginEmail' placeholder='Email address' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='email' />
    </div>
    <div>
      <label htmlFor='loginPassword' className='auth-input-label'>
        Password
      </label>
      <Input type='password' id='loginPassword' placeholder='Password' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='password' />
    </div>
  </Tabs.Content>
  <Tabs.Content className='mt-3 rounded border border-gray-400 px-4 py-3 space-y-2' value='item-2'>
    <div>
      <label htmlFor='loginEmail' className='auth-input-label'>
        Email
      </label>
      <Input type='email' id='loginEmail' placeholder='Email address' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='email' />
    </div>
    <div>
      <label htmlFor='loginPassword' className='auth-input-label'>
        Password
      </label>
      <Input type='password' id='loginPassword' placeholder='Password' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='password' />
    </div>
  </Tabs.Content>
</Tabs>
```

Table

```js
<Table
  loading={false}
  dataSource={tableData}
  className='w-full caption-bottom text-sm'
  title={
    <div className='py-2 px-8'>
      <span>User List</span>
    </div>
  }
  columns={[
    {
      title: 'Id',
      render: (_, id) => id + 1,
      className: 'h-12 px-4 text-center font-medium text-muted-foreground w-20',
    },
    {
      title: <span className='font-semibold'>Invoice</span>,
      render: (value) => value.invoice,
      className: 'h-12 px-4 text-center font-medium text-muted-foreground',
    },
    {
      title: <span className='font-semibold'>Status</span>,
      render: (value) => value.paymentStatus,
      className: 'h-12 px-4 text-center font-medium text-muted-foreground',
    },
    {
      title: <span className='font-semibold'>Method</span>,
      render: (value) => value.paymentMethod,
      className: 'h-12 px-4 text-center font-medium text-muted-foreground',
    },
    {
      title: <span className='font-semibold'>Amount</span>,
      render: (value) => value.totalAmount,
      className: 'h-12 px-4 text-center font-medium text-muted-foreground',
    },
    {
      title: <span className='font-semibold'>Email</span>,
      render: (value) => (
        <Button className='text-red-400' type='link' href={`mailto:${value.email}`}>
          {value.email}
        </Button>
      ),
      className: 'h-12 px-4 text-center font-medium text-muted-foreground',
    },
  ]}
/>
```
