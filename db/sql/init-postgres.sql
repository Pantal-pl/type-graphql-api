\c weapon_database;

CREATE TABLE users
(
  uniq UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id UUID DEFAULT gen_random_UUID(),
  name VARCHAR(255),
  surname VARCHAR(255)
);

CREATE TABLE WeaponModel
(
    model_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    model_name VARCHAR(255), 
    weapon_type VARCHAR(255),
    manufacturer VARCHAR(255), 
    model_description VARCHAR(255)

);

CREATE TABLE ModelComponent
(
    entry_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    weapon_model_id UUID,
    component_id UUID, 
    quantity_needed_for_model INT

);

CREATE TABLE Component
(
    component_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    

);
CREATE TABLE Order_
(

);
CREATE TABLE Production
(

);
CREATE TABLE Employee
(

);