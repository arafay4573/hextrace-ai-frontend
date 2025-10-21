import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import LoginForm from '../components/LoginForm';
import Table from '../components/Table';
import Badge from '../components/Badge';

const ComponentsPage = () => {
  const tableHeaders = ["Name", "Role", "Status", "Actions"];
  const tableRows = [
    ["Alice", "Admin", <Badge variant="critical">Critical</Badge>, "Edit"],
    ["Bob", "User", <Badge variant="warning">Warning</Badge>, "Edit"],
    ["Charlie", "User", <Badge variant="info">Info</Badge>, "Edit"],
  ];

  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Component Library</h1>

      {/* Buttons */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex gap-4 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <Card
          title="AI-Powered Threat Detection"
          description="Our advanced AI analyzes billions of data points to identify and neutralize threats in real-time."
          buttonText="Learn More"
        />
      </section>

      {/* Forms */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Forms</h2>
        <LoginForm />
      </section>

      {/* Tables */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Table</h2>
        <Table headers={tableHeaders} rows={tableRows} />
      </section>

      {/* Badges */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Badges</h2>
        <div className="flex gap-4">
          <Badge variant="critical">Critical</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </section>
    </div>
  );
};

export default ComponentsPage;
