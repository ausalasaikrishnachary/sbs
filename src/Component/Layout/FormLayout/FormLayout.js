import React from 'react';
import { Button } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Header from '../../Shared/Header/Header';

const FormLayout = ({ 
  user, 
  title, 
  tabs, 
  activeTab, 
  onTabClick, 
  children,
  sidebarCollapsed,
  setSidebarCollapsed
}) => {
  return (
    <div className="dashboard-container">
      <Header 
        user={user} 
        toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <div className="content-wrapper">
        <div className={`pcoded-navbar ${sidebarCollapsed ? 'navbar-collapsed' : ''}`}>
          <Sidebar 
            user={user} 
            collapsed={sidebarCollapsed} 
          />
        </div>
        <div className={`main-content ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="container customer-form-container">
            <h1 className="customer-form-title">{title}</h1>
            
            <div className="customer-form-tabs">
              {tabs.map((tab) => (
                <div 
                  key={tab.id}
                  className={`customer-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => onTabClick(tab.id)}
                >
                  {tab.label}
                </div>
              ))}
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FormSection = ({ 
  id, 
  activeTab, 
  title, 
  children, 
  onBack, 
  onNext, 
  nextLabel,
  isLast = false,
  onSubmit 
}) => {
  return (
    <div className={`card customer-form-card ${activeTab === id ? 'active-section' : ''}`}>
      <div className="customer-form-section">
        <h2 className="customer-section-title">{title}</h2>
        {children}
      </div>

      <div className="customer-form-submit">
        {onBack && (
          <Button 
            variant="outline-secondary" 
            className="customer-back-btn"
            onClick={onBack}
          >
            Back
          </Button>
        )}
        {onNext && !isLast && (
          <Button 
            variant="primary" 
            className="customer-submit-btn"
            onClick={onNext}
          >
            Next: {nextLabel}
          </Button>
        )}
        {isLast && (
          <Button 
            type="submit" 
            variant="primary" 
            className="customer-submit-btn"
            onClick={onSubmit}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default FormLayout;