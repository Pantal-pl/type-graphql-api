CREATE TABLE
    Component (
        component_id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        component_name VARCHAR(255) NOT NULL,
        component_description TEXT,
        unit_price DECIMAL(10, 2), -- Using DECIMAL for precise financial calculations
        in_stock INT
    );

CREATE TABLE
    WeaponModel (
        weapon_model_id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        model_name VARCHAR(255) NOT NULL,
        weapon_type VARCHAR(255),
        manufacturer VARCHAR(255),
        model_description TEXT
    );

CREATE TABLE
    ModelComponent (
        entry_id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        weapon_weapon_model_id UUID NOT NULL,
        component_id UUID NOT NULL,
        quantity_needed_for_model INT,
        FOREIGN KEY (weapon_weapon_model_id) REFERENCES WeaponModel (weapon_model_id),
        FOREIGN KEY (component_id) REFERENCES Component (component_id)
    );

CREATE TABLE
    Employees (
        employee_id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        employee_first_name VARCHAR(255) NOT NULL,
        employee_second_name VARCHAR(255),
        position VARCHAR(255),
        employment_date DATE,
        salary DECIMAL(10, 2), -- Using DECIMAL for precise financial calculations
        employee_contact VARCHAR(255)
    );

CREATE TABLE
    Production (
        production_id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        weapon_weapon_model_id UUID NOT NULL,
        estimated_completion_date DATE,
        production_status VARCHAR(255),
        responsible_employee_id UUID,
        FOREIGN KEY (weapon_weapon_model_id) REFERENCES WeaponModel (weapon_model_id),
        FOREIGN KEY (responsible_employee_id) REFERENCES Employees (employee_id)
    );

CREATE TABLE
    Order_ (
        order_id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        order_date DATE,
        expected_delivery_date DATE,
        order_status VARCHAR(255),
        total_order_cost DECIMAL(10, 2), -- Using DECIMAL for precise financial calculations
        weapon_weapon_model_id UUID NOT NULL,
        production_id UUID,
        FOREIGN KEY (weapon_weapon_model_id) REFERENCES WeaponModel (weapon_model_id),
        FOREIGN KEY (production_id) REFERENCES Production (production_id)
    );