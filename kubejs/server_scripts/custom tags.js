
// This is a custom tag for the steller 1.20.1 modpack.
ServerEvents.tags('item', event =>{

    event.add('steller:create_starter_machine','create:cogwheel','create:large_cogwheel','create:gearbox','create:vertical_gearbox','create:encased_fan','create:shaft','create:hand_crank','create:wrench','create:mechanical_press','create:water_wheel','create_connected:parallel_gearbox','create_connected:vertical_parallel_gearbox','create_connected:six_way_gearbox','create_connected:vertical_six_way_gearbox','create:encased_chain_drive','create:white_sail','create:windmill_bearing','create_connected:crank_wheel','create_connected:crank_wheel','create_connected:large_crank_wheel','create_dd:inverse_box','create:turntable','create:andesite_casing','create:schematicannon','create:mechanical_drill','create:mechanical_saw','create:sail_frame','create:andesite_door','create_sa:zinc_helmet','create_sa:zinc_chestplate','create_sa:zinc_leggings','create_sa:zinc_boots','create:schematic_table','create_dd:cog_crank')
    event.add('steller:create_production_machine','create:clutch','create_connected:inverted_clutch','create:gearshift','create_connected:inverted_gearshift','create:adjustable_chain_gearshift','create:belt_connector','create:large_water_wheel','create:nozzle','create:millstone','create:mechanical_mixer','create:basin','create:depot','create:cuckoo_clock','create:chute','create:speedometer','create:stressometer','create:wooden_bracket','create:metal_bracket','create:mechanical_bearing','create_connected:shear_pin','create_connected:overstress_clutch','create_connected:centrifugal_clutch','create_connected:freewheel_clutch','create:item_vault','create_connected:item_silo','create:redstone_contact','create:mechanical_harvester','create:mechanical_plough','create:mechanical_roller','create:rose_quartz_lamp','create:andesite_funnel','create:andesite_tunnel','create:mechanical_piston','create:sticky_mechanical_piston','create:piston_extension_pole','createaddition:rolling_mill','createaddition:connector','createaddition:small_light_connector','createaddition:redstone_relay','create:weighted_ejector','create:brown_toolbox','create_sa:zinc_pickaxe','create_sa:zinc_axe','create_sa:zinc_shovel','create_sa:zinc_hoe','create_sa:zinc_sword','create_sa:zinc_handle','create_connected:brake','create_connected:encased_chain_cogwheel','create_dd:multimeter','create_dd:redstone_divider','create_dd:kinetic_motor','create_dd:item_stockpile')
    event.add('steller:create_liquid_machine','create:fluid_pipe','create:mechanical_pump','create:smart_fluid_pipe','create:fluid_valve','create:copper_valve_handle','create:fluid_tank','create:hose_pulley','create:item_drain','create:spout','create:portable_fluid_interface','create_connected:fluid_vessel','create:empty_blaze_burner','create:display_board','create:nixie_tube','create:steam_engine','create:copper_backtank','create:steam_whistle','create:analog_lever','create:pulse_repeater','create:pulse_extender','create:powered_latch','create:powered_toggle_latch','create:haunted_bell','create:copper_door','create_sa:copper_chestplate','create_sa:copper_pickaxe','create_sa:copper_axe','create_sa:copper_shovel','create_sa:copper_sword','create_sa:copper_hoe','create_sa:copper_magnet','create_dd:fluid_reservoir','create:copper_casing')
    event.add('steller:create_brass_machine','create:mechanical_crafter','create:deployer','create:smart_chute','create:smart_fluid_pipe','create:brass_casing','create:sequenced_gearshift','create:flywheel','create:rotation_speed_controller','create:mechanical_arm','create:brass_funnel','create:brass_tunnel','create:content_observer','create:stockpile_switch','create:display_link','create:redstone_link','create:peculiar_bell','create_sa:steam_engine','create_sa:heat_engine','create_sa:hydraulic_engine','create_sa:brass_jetpack_chestplate','create_sa:andesite_jetpack_chestplate','create_sa:brass_exoskeleton_chestplate','create_sa:andesite_exoskeleton_chestplate','create_sa:copper_exoskeleton_chestplate','create_sa:blazing_pickaxe','create_sa:blazing_axe','create_sa:blazing_shovel','create_sa:blazing_cleaver','create_connected:brass_gearbox','create_connected:vertical_brass_gearbox','create_connected:sequenced_pulse_generator','create_connected:linked_transmitter','create_dd:hydraulic_press','create_dd:furnace_engine','create:crushing_wheel','create:rope_pulley','create_dd:industrial_fan','create_dd:bore_block','create_connected:inventory_access_port','create_connected:inventory_bridge','create_connected:empty_fan_catalyst','create_connected:fan_blasting_catalyst','create_connected:fan_smoking_catalyst','create_connected:fan_splashing_catalyst','create_connected:fan_haunting_catalyst','create_connected:fan_seething_catalyst','create_connected:fan_freezing_catalyst','create_connected:fan_sanding_catalyst','create:brass_door','create_sa:brass_helmet','create_sa:brass_chestplate','create_sa:brass_leggings','create_sa:brass_boots','create_sa:brass_sword','create_sa:brass_pickaxe','create_sa:brass_hoe','create_sa:brass_axe','create_sa:brass_shovel')
    event.add('steller:create_mobile_machine','vs_clockwork:incomplete_wanderwand','vs_clockwork:wanderwand','vs_clockwork:wanderlite_cube','vs_clockwork:wanderlite_matrix','vs_clockwork:gravitron','vs_clockwork:physics_infuser','vs_clockwork:gyro','vs_clockwork:alt_meter','vs_clockwork:flap','vs_clockwork:flap_bearing','vs_clockwork:phys_bearing','vs_clockwork:propeller_bearing','vs_clockwork:redstone_resistor','vs_clockwork:wing','vs_clockwork:command_seat','create:gantry_carriage','create:gantry_shaft','create:clockwork_bearing','create:elevator_pulley','create:cart_assembler','create:controller_rail','create:linear_chassis','create:secondary_linear_chassis','create:radial_chassis','create:sticker','create:contraption_controls','create:track','create:railway_casing','create:schedule','create:track_station','create:track_signal','create:track_observer','create:controls','create:minecart_coupling','create:portable_storage_interface','create:train_door')
    event.add('steller:guns_cr_series','pointblank:cr_demeanour','pointblank:cr_flea','pointblank:cr_jpot','pointblank:cr_jpot_ii9','pointblank:cr_k80','pointblank:cr_meteor_fist','pointblank:cr_sar','pointblank:cr_shock','pointblank:cr_spear')
    event.add('steller:guns_e_series','pointblank:e_prism','pointblank:e_spark','pointblank:e_vortex')
    event.add('steller:guns_st_series','pointblank:st_beca','pointblank:st_rasword','pointblank:st_sandstorm','pointblank:st_snake_strike','pointblank:st_stifle')
    event.add('steller:guns_x_series','pointblank:x_brute','pointblank:x_cross_star','pointblank:x_dila','pointblank:x_guard','pointblank:x_medusa','pointblank:x_protocol','pointblank:x_pulse','pointblank:x_surge')
    event.add('steller:thermal_power_machines','thermal:dynamo_stirling','thermal:dynamo_compression','thermal:dynamo_magmatic','thermal:dynamo_numismatic','thermal:dynamo_lapidary','thermal:dynamo_disenchantment','thermal:dynamo_gourmand')
    event.add('steller:thermal_production_machines','thermal:machine_furnace','thermal:machine_sawmill','thermal:machine_pulverizer','thermal:machine_smelter','thermal:machine_insoator','thermal:machine_centrifuge','thermal:machine_press','thermal:machine_crucible','thermal:machine_chiller','thermal:machine_refinery','thermal:machine_pyrolyzer','thermal:machine_bottler','thermal:machine_brewer','thermal:machine_crystallizer','thermal:machine_crafter','thermal:machine_insolator')
    event.add('steller:thermal_usefull_machines','thermal:tinker_bench','thermal:charge_bench','thermal:item_buffer','thermal:device_tree_extractor','thermal:device_fisher','thermal:device_composter','thermal:device_water_gen','thermal:device_rock_gen','thermal:device_collector','thermal:device_xp_condenser','thermal:device_nullifier','thermal:device_potion_diffuser')
    event.add('steller:thermal_storage_machines','thermal:energy_cell','thermal:fluid_cell')
    event.add('steller:thermal_trasportation','thermal:energy_duct','thermal:fluid_duct','thermal:fluid_duct_windowed')
    event.add('steller:thermal_useful_tools','thermal:redprint','thermal:rf_potato','thermal:xp_crystal','thermal:lock','thermal:satchel','thermal:detonator','thermal:flux_drill','thermal:flux_saw','thermal:flux_capacitor','thermal:flux_magnet','thermal:reservoir','thermal:potion_infuser','thermal:potion_quiver')
    event.add('steller:thermal_tnt','thermalal:explosive_grenade','thermal:ender_grenade','thermal:glowstone_grenade','thermal:redstone_grenade','thermal:slime_grenade','thermal:fire_grenade','thermal:ice_grenade','thermal:lightning_grenade','thermal:earth_grenade','thermal:ender_tnt','thermal:glowstone_tnt','thermal:redstone_tnt','thermal:slime_tnt','thermal:fire_tnt','thermal:ice_tnt','thermal:lightning_tnt','thermal:earth_tnt')
    event.add('steller:thermal_armor','thermal:diving_helmet','thermal:diving_chestplate','thermal:diving_leggings','thermal:diving_boots','thermal:hazmat_helmet','thermal:hazmat_chestplate','thermal:hazmat_leggings','thermal:hazmat_boots')
})